import React, { useState, useEffect } from "react";
import { Container, Box, CircularProgress } from "@mui/material";

import ProductList from "../ProductList/ProductList";
import "./ProductListContainer.css";
import Footer from "../Footer/Footer";
import Categories from "../Categories/Categories";
import { ProductsService } from "../../services/Products.service";
import Message from "../Message/Message.js";

function ProductListContainer({ match }) {
  const nombreCateoria = match.params.id;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      let data = await ProductsService.getProducts();
      if (nombreCateoria) {
        const dataFilter = data.filter((i) => i.category === nombreCateoria);
        setProducts(dataFilter);
      } else {
        setProducts(data);
      }
    } catch (error) {
      setAlert(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [nombreCateoria]);

  return (
    <Box>
      <Container>
        <h1 className="titulo-principal">Bienvenidos a Dessert NOW!</h1>
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress sx={{ color: "#e91e63" }} />
          </Box>
        ) : (
          <Box>
            <Categories />
            <ProductList items={products} category={nombreCateoria} />
          </Box>
        )}
        {alert && (
          <Box sx={{ py: 6 }}>
            <Message text={"Error al cargar los productos"} />
          </Box>
        )}
      </Container>
      {!isLoading && <Footer />}
    </Box>
  );
}

export default ProductListContainer;
