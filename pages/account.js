
import AccountPage from '../components/AccountPage'
import MyInfo from '../components/MyInfo';
import { useState } from 'react';

import { useAuth } from '@aws-amplify/ui-react/internal';
import { useRouter } from 'next/router';
import { AccountSettings, Card, withAuthenticator } from '@aws-amplify/ui-react';

function Account () {
  const authAttributes = useAuth().user?.attributes ?? {};
  const router = useRouter()
  const handleSuccessPassword = () => {
    alert('password is successfully changed!')
  }
  
  const handleSuccessUser = () => {
    alert('user has been successfully deleted')
  }
  
  const[showMyInfoDiv, setShowMyInfoDiv] = useState(true);
  const [showPasswordDiv, setShowPasswordDiv] = useState(false);
  const [showDeleteDiv, setShowDeleteDiv] = useState(false);

  return (
    <>
      <div className='accountSettings'>
        <AccountPage
          overrides={{
            MyInfoButton: {
              as: 'button',
              onClick: () => {
                setShowMyInfoDiv(true)
                setShowPasswordDiv(false)
                setShowDeleteDiv(false)
              }
            },
            ChangePasswordButton: {
              as: 'button',
              onClick: () => {
                setShowMyInfoDiv(false)
                setShowPasswordDiv(true)
                setShowDeleteDiv(false)
              }
            },
            DeleteAccountButton: {
              as: 'button',
              onClick: () => {
                setShowMyInfoDiv(false)
                setShowPasswordDiv(false)
                setShowDeleteDiv(true)
              }
            }
          }}
        />
        <div className='accountMain'>
          <div className='changePasswordDiv' style={{display: showPasswordDiv === false && 'none'}}>
            <Card>
              <AccountSettings.ChangePassword onSuccess={handleSuccessPassword} />
            </Card>
          </div>
          <div className='deleteAccountDiv' style={{display: showDeleteDiv === false && 'none'}}>
            <Card>
                <AccountSettings.DeleteUser onSuccess={handleSuccessUser} />
                <br />
                <text>WARNING: This will permanently delete your account from the system.</text>
            </Card>
          </div>
          <div className='myInfoDiv' style={{display: showMyInfoDiv === false && 'none'}}>
              <MyInfo
              overrides={{
                EmailInsert: {
                  children: `${authAttributes["email"]}`
                },
                PhoneInsert: {
                  children: `${authAttributes["phone_number"]}`
                },
                FirstNameInsert: {
                  children: `${authAttributes["given_name"]}`
                },
                LastNameInsert: {
                  children: `${authAttributes["family_name"]}`
                }
              }}
              />
          </div>
        </div>
      </div>
    </>
    
  );
}

export default withAuthenticator(Account);