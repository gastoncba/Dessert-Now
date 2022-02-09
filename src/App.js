import React from 'react';
import './App.css'; 

//componentes
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from './views/Cart/Cart';
import OrderConteiner from './views/OrderConteiner/OrderConteiner';
import { Box } from '@mui/material';
//vistas 
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';
// REACT-ROUTER-DOM
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//importamos el provider 
import {CardProvider} from './context/CardContext';

function App() {
    return(
    <CardProvider>
    <Router>
      <NavBar></NavBar>
      <Box sx={{mt: 10}}>
      <Switch>
        <Route path='/' exact component={ItemListContainer}></Route>
        <Route path='/category/:id' exact component={ItemListContainer}></Route>
        <Route path='/item/:id' exact component={ItemDetailContainer}></Route>
        <Route path='/cart' exact component={Cart}></Route>
        <Route path='/form' exact component={OrderConteiner}></Route>
      </Switch>
      </Box>
    </Router>
    </CardProvider>
    )
}

export default App;