import React from 'react';
import SignInWithGoogle from './components/SignInWithGoogle';
import SignUpWithGoogle from './components/SignUpWithGoogle';

function App() {
  return (
    <div className="App">
      <h1>Bookeeper App</h1>
      <SignInWithGoogle />
      <SignUpWithGoogle />
    </div>
  );
}

export default App;
