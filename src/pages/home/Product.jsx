import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import ProductItem from "../../components/ProductItem";
import ProductDetails from "../product-details/ProductDetails";

const Title = styled.h1`
  margin: 30px 0px;
`;
const Loader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const ProductWrap = styled.div`
  & span {
    font-size: 22px;
    font-weight: 700;
  }
`;
const CustGrid = styled(Grid)`
  &:hover {
    cursor: pointer;
  }
`;
const Product = ({ productList, setProductList }) => {
  const [productDetails, setProductDetails] = useState(null);

  return (
    <Container>
      {productDetails ? (
        <ProductDetails
          productDetails={productDetails}
          setProductList={setProductList}
          productList={productList}
          setProductDetails={setProductDetails}
        />
      ) : productList.length > 0 ? (
        <ProductItem productList={productList} setProductList={setProductList} setProductDetails={setProductDetails} />
      ) : (
        <Loader>Loading...</Loader>
      )}
    </Container>
  );
};

export default Product;
