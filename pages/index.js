import React from 'react';
import { View } from '@aws-amplify/ui-react';
import { HeroLayout4 } from '../ui-components';
import { useRouter } from 'next/router';
import { withAuthenticator } from '@aws-amplify/ui-react';

function index() {
  const router = useRouter();
  return (
    <View paddingTop='5%' paddingBottom='5%'>
      <HeroLayout4
        width={'100%'}
        paddingLeft={'10%'}
        paddingRight={'20%'}
        handleClick={() => {
          router.push('/dashboard')
        }} />
    </View>
  );
}
export default index;