import React from 'react'; 
import { Router } from 'react-router-dom'
import Global from  './styles/global'
//import Background from './pages/_layouts/default'
import Routes from './routes'

import history from './services/history'

function App() {
  return (
    <Router history={history}>
        <Global/>
        <Routes/>
    </Router>  
  );
}

export default App;
