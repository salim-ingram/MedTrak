
import { NavBar, AddMedForm, UpdateMedForm, AccountDropDown } from '../ui-components';
import { useState } from 'react';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

function Layout ({ signOut }) {

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

  return (
    <>
        <div className='NavBar'>
            <NavBar 
                width={'100%'}
                overrides={{
                    Button36563453: { onClick: () => {dashClick()}},
                    Button36562808: { onMouseEnter: () => setShowAccountDrop(true) },
                    Button36472923: { onClick: () => setShowAddModal(true)},
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
                    Button36663070: {
                        onClick: async () => {
                          accountClick()
                        }
                    },
                    Button36663073: {
                        onClick: async () => {
                            signOut()
                        }
                    }
                }}
            /> 
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

export default withAuthenticator(Layout);