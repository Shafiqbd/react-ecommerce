import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ProductItem from "../../components/ProductItem";
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
const CustGrid = styled(Grid)`
  &:hover {
    cursor: pointer;
  }
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
      {productList.length > 0 ? <ProductItem productList={productList} /> : <Loader>Loading...</Loader>}
    </Container>
  );
};

export default Product;
