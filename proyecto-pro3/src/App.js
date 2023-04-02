import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from './screens/Home/Home'
import Favoritos from './screens/Favoritos/Favoritos';
import NotFound from './screens/NotFound/NotFound';

function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route path='/' exact= {true} component={Home} />
          <Route path='/favoritos' component={Favoritos} />
          <Route component={NotFound} />
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
