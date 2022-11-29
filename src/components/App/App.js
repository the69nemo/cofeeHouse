import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import Modal from "../Modal/Modal";
import Menu from "../Menu/Menu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(!isOpen);

  const closeModal = (evt) => {
    if (evt.type === "keydown" || evt.target.classList.contains("open")) {
      setIsOpen(false);
    }
  };

  return (
    <div className="root">
      <Switch>
        <Route path="/" exact>
          <Home handleOpenModal={handleOpenModal} />
        </Route>
      </Switch>
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>
      <Modal
        isOpen={isOpen}
        handleOpenModal={handleOpenModal}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
