
import { NavBar, MedCardCollection, AddMedForm, UpdateMedForm, AccountDropDown } from '../ui-components';
import { DataStore } from '@aws-amplify/datastore';
import { Medication } from '../models';
import { useState } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

function Dashboard ({ signOut }) {
  const router = useRouter()
  const dashClick = () => {
    router.push('/dashboard');
  }
  const accountClick = () => {
    router.push('/account');
  }
  const user = Auth.currentUserInfo({
    bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then((user) => { 
      return user;
    })
    .catch((err) => console.log(err));

  const [showAddModal, setShowAddModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showAccountDrop, setShowAccountDrop] = useState(false)
  const [updateMed, setUpdateMed] = useState()

  async function updateQuantity(item) {
    const original = await DataStore.query(Medication, item);
    await DataStore.save(
      Medication.copyOf(original, updated => {
        updated.medQuantity = (original.medQuantity - 1)
      })
    );
  }

  return (
    <>
        <div className='NavBar'>
          <NavBar 
            width={'100%'}
            overrides={{
              Button36563453: { onClick: () => {dashClick}},
              Button36472923: { onClick: () => setShowAddModal(true)},
              Button36562808: { onMouseEnter: () => setShowAccountDrop(true) }
            }}
          />
        </div>
          <div className='accountDropModal' style={{ display: showAccountDrop === false && 'none' }}>
              <AccountDropDown backgroundColor={'transparent'}
                overrides={{
                  AccountDropDown: {
                    onMouseLeave: () => {
                      setShowAccountDrop(false)
                    }
                  },
                  Button: {
                    as: 'button',
                    onMouseEnter: () => {
                      setShowAccountDrop(true)
                    },
                    onMouseLeave: () => {
                      setShowAccountDrop(false)
                    }
                  },
                  Button36663073: {
                    onClick: async () => {
                      signOut()
                    }
                  },
                  Button36663070: {
                    onClick: async () => {
                      accountClick()
                    }
                  }
                }}
              /> 
          </div>

      <div className='center'>
        <div className='MedCollectionContainer'>
        <MedCardCollection overrideItems={({ item, idx }) => {
        return {
          overrides: {
            edit: {
              as: 'button',
              onClick: () => {
                setShowUpdateModal(true)
                setUpdateMed(item)
              }
            },
            Button: {
              as: 'button',
              onClick: async () => {
                updateQuantity(item)
              }
            }
          }
        }
      }}
      />
        </div>
      </div>
      <div className='modal' style={{ display: showAddModal === false && 'none' }}>
        <AddMedForm 
          overrides={{ 
            Icon: {
              as: 'button',
              onClick: () => setShowAddModal(false)
            }
          }}
        />
      </div>
      <div className='modal' style={{ display: showUpdateModal === false && 'none' }}>

        <UpdateMedForm
          {...Button => (this.btn = Button)}
          medication={updateMed}
          overrides={{
            Icon: {
              as: 'button',
              onClick: () => setShowUpdateModal(false)
            }
          }}
        />
      </div>
    </>
  );
}

export default withAuthenticator(Dashboard);