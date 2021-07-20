import React from 'react';
import './App.css'; 

//componentes
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from './views/Cart/Cart';
import Order from './views/Order/Order';
//vistas 
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';
// REACT-ROUTER-DOM
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//importamos el provider 
import {CardProvider} from './context/CardContext';

class App extends React.Component {
  render() {
    return(
    <CardProvider>
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path='/' exact component={ItemListContainer}></Route>
        <Route path='/category/:id' exact component={ItemListContainer}></Route>
        <Route path='/item/:id' exact component={ItemDetailContainer}></Route>
        <Route path='/cart' exact component={Cart}></Route>
        <Route path='/form' exact component={Order}></Route>
      </Switch>
    </Router>
    </CardProvider>
    )
  }
}

export default App;