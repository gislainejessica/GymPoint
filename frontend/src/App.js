import React from 'react'; 
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import Global from  './styles/global';

function App() {
  return (
    <Router history={history}>
        <Global/>
        <Routes/>
    </Router>  
  );
}

export default App;
