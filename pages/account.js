
import { NavBar, AccountDropDown, AddMedForm } from '../ui-components';
import { useState } from 'react';

import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { AccountSettings, Card, withAuthenticator } from '@aws-amplify/ui-react';

function Account ({ signOut }) {
  const router = useRouter()
  const dashClick = () => {
    router.push('/dashboard');
  }

  const handleSuccessPassword = () => {
    alert('password is successfully changed!')
  }
  
  const handleSuccessUser = () => {
    alert('user has been successfully deleted')
  }

  const user = Auth.currentUserInfo({
    bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then((user) => { 
      return user;
    })
    .catch((err) => console.log(err));

  const [showAddModal, setShowAddModal] = useState(false)
  const [showAccountDrop, setShowAccountDrop] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
        <div className='NavBar'>
            <NavBar 
                width={'100%'}
                overrides={{
                    Button36563453: { onClick: () => {dashClick()}},
                    Button36472923: { onClick: () => setShowAddModal(true)},
                    Button36562808: { onMouseEnter: () => setShowAccountDrop(true) }
                }}
            />
            <div className='accountSettings'>
            <button onClick={() => {setShowPasswordModal(true);}} >
                    Change Password
                </button>
                <button onClick={() => {setShowDeleteModal(true);}} >
                    Delete Account
                </button>
            <div className='modal' style={{display: showPasswordModal === false && 'none'}}>
                <Card>
                    <AccountSettings.ChangePassword onSuccess={handleSuccessPassword}/>
                </Card>
            </div>
            <div className='modal' style={{display: showDeleteModal === false && 'none'}}>
                <Card>
                    <AccountSettings.DeleteUser onSuccess={handleSuccessUser}/>
                </Card>
            </div>
        </div>
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
    </>
    
  );
}

export default withAuthenticator(Account);