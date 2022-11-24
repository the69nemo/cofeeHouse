import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Modal from '../Modal/Modal';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(!isOpen)

  return (
    <div className='root'>
      <Switch>
        <Route path='/' exact>
          <Home
            handleOpenModal={handleOpenModal}
          />
        </Route>
      </Switch>
      <Modal
        isOpen={isOpen}
      />
    </div>
  );
}

export default App;
