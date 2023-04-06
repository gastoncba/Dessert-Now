import React from "react";
import "./App.css";

//components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import OrderConteiner from "./views/OrderConteiner/OrderConteiner";
import { Box } from "@mui/material";
//views
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer";
import Cart from "./views/Cart/Cart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CardProvider } from "./context/CardContext";

function App() {
  return (
    <CardProvider>
      <Router>
        <NavBar />
        <Box sx={{ mt: 2 }}>
          <Switch>
            <Route path="/" exact component={ItemListContainer} />
            <Route path="/category/:id" exact component={ItemListContainer} />
            <Route path="/item/:id" exact component={ItemDetailContainer} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/form" exact component={OrderConteiner} />
          </Switch>
        </Box>
      </Router>
    </CardProvider>
  );
}

export default App;
