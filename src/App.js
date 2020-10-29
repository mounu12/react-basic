import React from 'react';
import './App.css';
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import Student from './components/StudentCreation/index';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history} className="App">
      <Route path = "/" component = {Student}>
      </Route>
   </Router>
    </div>
  );
}

export default App;
