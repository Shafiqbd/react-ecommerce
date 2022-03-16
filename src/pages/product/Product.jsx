import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AddProduct from "../../components/AddProduct";
import { setProducts } from "../../redux/actions/products/productActions";
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
const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Product = () => {
  const { products } = useSelector((state) => state.getAllProducts);
  const dispatch = useDispatch();
  const productList = products;

  useEffect(async () => {
    dispatch(setProducts(await getAllProduct()));
  }, []);

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
