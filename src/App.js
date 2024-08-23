/*
import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
*/

/*
import './index.css';
import React from "react";
import { ReactDOM } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";

const AppLayout = () =>{
  return(
     <div className="app">
      <Header /> 
      <Body />
     </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />
  },
  {
    path:"/about",
    element: <About />
  },

  {
    path: "/contact",
    element: <Contact />
  },
]);

const App = () =>{
  return(
    <div>
        <AppLayout />
    </div>
  );
};

export default App;
*/
/* conflict driven ui -> yeh ek concept hai isko pdna */


