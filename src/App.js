import React from "react";
import "./App.css";

//components
import NavBar from "./components/NavBar/NavBar";
import { Box } from "@mui/material";
//views

import Cart from "./views/Cart/Cart";
import OrderConteiner from "./views/OrderConteiner/OrderConteiner";
import NotFound from "./views/NotFound/NotFound";
import ProductDetailContainer from "./views/ProductDetailContainer/ProductDetailContainer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CardProvider } from "./context/CardContext";
import ProductListContainer from "./components/ProductListContainer/ProductListContainer";


function App() {
  return (
    <CardProvider>
      <Router>
        <NavBar />
        <Box sx={{ mt: 2 }}>
          <Switch>
            <Route path="/" exact component={ProductListContainer} />
            <Route path="/category/:id" exact component={ProductListContainer} />
            <Route path="/item/:id" exact component={ProductDetailContainer} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/form" exact component={OrderConteiner} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </Box>
      </Router>
    </CardProvider>
  );
}

export default App;
