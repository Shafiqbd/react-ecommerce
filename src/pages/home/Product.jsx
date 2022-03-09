import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductItem from "../../components/ProductItem";
import { getAllProduct } from "../../utils/api";

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
const Product = () => {
  const [productList, setProductList] = useState([]);
  useEffect(async () => {
    setProductList(await getAllProduct());
  }, []);

  return (
    <Container>
      {productList.length > 0 ? (
        <ProductItem productList={productList} setProductList={setProductList} />
      ) : (
        <Loader>Loading...</Loader>
      )}
    </Container>
  );
};

export default Product;
