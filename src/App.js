import React from 'react';
import { Router } from './Router';
import { State } from './Store/Context/State';

function App() {
  return (
    <State>
      <Router />
    </State>
  );
}

export default App;
