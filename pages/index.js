import React from 'react';
import { View } from '@aws-amplify/ui-react';
import { HeroLayout4 } from '../ui-components';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Auth } from 'aws-amplify';

function Index() {
  const router = useRouter()
  const signUp = () => {
    router.push('/sign-in');
  }
  const [signedIn, setSignedIn] = useState(false)

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
          setSignedIn(true);
          router.push('/dashboard');
        }
      })
    }
    yoink()


  return (
      <View paddingTop='5%' paddingBottom='5%'>
        <HeroLayout4
          width={'100%'}
          paddingLeft={'10%'}
          paddingRight={'20%'}
          handleClick={signUp} />
      </View>

  );
}
export default Index;