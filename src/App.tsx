import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';
import React from 'react';
import Layout from './layouts/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Layout>
        <Routing />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
