import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';


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
