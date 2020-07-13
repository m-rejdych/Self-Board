import React from 'react';
import { makeStyles } from '@material-ui/core';

import Header from './shared/Header';
import Footer from './shared/Footer';
import Dashboard from './pages/Dashboard';

const useClasses = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

function App() {
  const classes = useClasses();

  return (
    <div className={classes.root}>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
