import * as React from "react";

import NavBarSaved from './NavBarSaved'
import Footer from './Footer'
import { MedicationCreateForm } from '../ui-components';
import { useState } from 'react';

import { Auth, DataStore } from 'aws-amplify';
import { useRouter } from 'next/router';

export default function Layout({ children }) {

  const [signedIn, setSignedIn] = useState(false)
  const router = useRouter()
  const dashClick = () => {
    router.push('/dashboard');
  }
  const accountClick = () => {
    router.push('/account');
  }
  const signInClick = () => {
    router.push('/sign-in');
  }
  const id = Auth.currentUserInfo({
    bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then((user) => {
      return user.id;
    })
    .catch((err) => console.log(err));

  const yoink = () => {
    id.then((a) => {
      if (a === undefined) {
        setSignedIn(false)
      }
      else {
        setSignedIn(true)
      }
    })
  }
  yoink()
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAccountDrop, setShowAccountDrop] = useState(false);

  return (
    <>
      <div className='content-container'>
        <NavBarSaved
          overrides={{
            MedTrak: {
              as: 'button',
              onClick: () => { dashClick() }
            },
            Button36563453: {
              as: 'button',
              onClick: () => { dashClick() },
              display: signedIn === false && 'none'
            },
            Button36472923: {
              as: 'button',
              onClick: () => setShowAddModal(true),
              display: signedIn === false && 'none'
            },
            Divider: {
              display: signedIn === false && 'none'
            },
            Button36562808: {
              onClick: () => setShowAccountDrop(true),
              display: signedIn === false && 'none'
            },
            DropFrame: {
              display: showAccountDrop === false && 'none',
              onMouseLeave: () => setShowAccountDrop(false)
            },
            AccountButton: {
              as: 'button',
              onClick: () => { accountClick() }
            },
            SignOutButton: {
              as: 'button',
              onClick: async () => {
                Auth.signOut()
                DataStore.clear()
                setSignedIn(false && 'none')
              }
            },
            SignInButton: {
              as: 'button',
              onClick: () => { signInClick() },
              display: signedIn === true && 'none'
            }
          }}
        />
        <main>{children}</main>
        <div className='modal' style={{ display: showAddModal === false && 'none' }}>
          <MedicationCreateForm
            onSubmit={(fields) => {
              // Example function to trim all string inputs
              const updatedFields = {}
              Object.keys(fields).forEach(key => {
                if (typeof fields[key] === 'string') {
                  updatedFields[key] = fields[key].trim()
                } else {
                  updatedFields[key] = fields[key]
                }
              })
              return updatedFields
            }}
            onCancel={() => {
              setShowAddModal(false)
            }}
            onSuccess={() => {
              setShowAddModal(false)
            }}
          />
        </div>
      </div>
      <Footer className='footer--pin' height='72px' padding-bottom='15%'/>
    </>
  )
}

