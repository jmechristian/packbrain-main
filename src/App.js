import React from 'react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import Dashboard from './components/dashboard/Dashboard';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
