import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebaseApp from '../firebase';
import './component.css';

function SignInWithGoogle() {
  const signInWithGoogle = async () => {
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User:', user);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='authButton'>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default SignInWithGoogle;
