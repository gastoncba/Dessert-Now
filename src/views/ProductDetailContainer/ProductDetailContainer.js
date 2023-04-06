import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import ProductDetail from "../ProductDetail/ProductDetail";
import { ProductsService } from "../../services/Products.service";

function ProductDetailContainer({ match }) {
  const ID = match.params.id;
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async () => {
    setIsLoading(true);
    try {
      let selected_prod = await ProductsService.getProduct(ID);
      setProduct(selected_prod);
    } catch (error) {
      console.log("ERROR: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [ID]);

  return (
    <Container>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
          <CircularProgress sx={{ color: "#e91e63" }} />
        </Box>
      ) : (
        <ProductDetail item={product} />
      )}
    </Container>
  );
}

export default ProductDetailContainer;
