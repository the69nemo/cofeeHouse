import React from 'react';
import './App.css';
import Home from '../Home/Home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='root'>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
