import React from 'react';
import './App.css'; 

//componentes
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
//vistas 
import ItemDetailContainer from './views/ItemDetailContainer/ItemDetailContainer';
// REACT-ROUTER-DOM
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path='/' exact component={ItemListContainer}></Route>
        <Route path='/category/:id' exact component={ItemListContainer}></Route>
        <Route path='/item/:id' exact component={ItemDetailContainer}></Route>
      </Switch>
    </Router>
    )
  }
}

export default App;