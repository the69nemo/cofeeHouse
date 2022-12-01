import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import data from "../../data/data.json";
import Home from "../Home/Home";
import Modal from "../Modal/Modal";
import Menu from "../Menu/Menu";
import About from "../About/About";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(data);

  const handleOpenModal = () => setIsOpen(!isOpen);

  const closeModal = (evt) => {
    if (evt.type === "keydown" || evt.target.classList.contains("open")) {
      setIsOpen(false);
    }
  };

  const filterProduct = (filterParam) => {
    const productList = data.map((el) => el);
    if (filterParam === 'all') {
      return setCurrentProduct(productList);
    }
    const filtered = productList.filter(el => el.type === filterParam);
    return setCurrentProduct(filtered);
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
          <Menu
            currentProduct={currentProduct}
            filterProduct={filterProduct}
          />
        </Route>
        <Route path="/about">
          <About />
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
