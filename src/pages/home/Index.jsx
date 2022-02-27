import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllProduct } from "../../utils/api";
import Product from "./Product";
const Loader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Home = () => {
  const [productList, setProductList] = useState([]);
  useEffect(async () => {
    setProductList(await getAllProduct());
  }, []);

  return (
    <Container>
      {productList.length === 0 ? <Loader>Loading...</Loader> : <Product productList={productList} />}
    </Container>
  );
};

export default Home;
