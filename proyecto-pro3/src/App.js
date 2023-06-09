import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Home from './screens/Home/Home'
import Favoritos from './screens/Favoritos/Favoritos';
import NotFound from './screens/NotFound/NotFound';
import Header from './components/Header/Header';
import Detalle from './screens/Detalle/Detalle';
import PaginaBuscador from './screens/PaginaBuscador/PaginaBuscador';
import Canciones from './screens/Canciones/Canciones'
import Albums from './screens/Albums/Albums';

function App() {
  return (
    <>
      <Header/>
        <Switch>
          <Route path='/'  exact= {true} component={Home} />
          <Route path='/favoritos' component={Favoritos} />
          <Route path='/detalle/:category/:id' component={Detalle} /> 
          <Route path='/busqueda' component={PaginaBuscador}/>
          <Route path='/canciones' component={Canciones}/>
          <Route path='/albums' component={Albums}/>
          <Route component={NotFound} />
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
