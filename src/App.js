import React from 'react';
import './App.css'; 
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

class App extends React.Component {
  render() {
    return(
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting={'Bienvenidos a dessert now!'}></ItemListContainer>
    </div>
    )
  }
}

export default App;