import React from 'react';

import { useRouter } from 'next/router';
import { withAuthenticator } from '@aws-amplify/ui-react';


function authPage() {
  const router = useRouter()
  const signIn = () => {
    router.push('/dashboard');
  }
  return (
    signIn()
  );
}
export default withAuthenticator(authPage);

