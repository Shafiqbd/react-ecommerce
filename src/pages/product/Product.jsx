import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import AddProduct from "../../components/AddProduct";

const Title = styled.h1`
  margin: 30px 0px;
`;
const ProductWrap = styled.div`
  & span {
    font-size: 22px;
    font-weight: 700;
  }
`;
const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Product = () => {
  return (
    <Container>
      <ProductWrap>
        <ProductTitle>
          <Title>Product</Title>
        </ProductTitle>
      </ProductWrap>

      <AddProduct />
    </Container>
  );
};

export default Product;
