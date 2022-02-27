import { Button, Card, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  margin: 0;
  padding-left: 20px;
`;
const ProductDetailsWrap = styled.div`
  & h1 {
    font-size: 25px;
    font-weight: 700;
    margin-top: 50px;
  }
  & h4 {
    color: green;
    font-size: 20px;
    font-weight: 500;
  }
  & h3 {
    color: gray;
    font-size: 20px;
    font-weight: 500;
  }
  & img {
    height: 400px;
    width: 100%;
  }
  & p {
    line-height: 30px;
    text-align: justify;
  }
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px;
`;
const ProductDetails = ({ productDetails, setProductDetails }) => {
  const back = () => {
    setProductDetails(null);
  };
  return (
    <ProductDetailsWrap>
      <TitleWrap>
        <Button variant="contained" onClick={back}>
          Back
        </Button>
        <Title>Product Details</Title>
      </TitleWrap>

      <Card style={{ padding: "15px" }}>
        {productDetails ? (
          <Grid container spacing={4}>
            <Grid item md={6}>
              <img src={productDetails.image} alt="" />
            </Grid>
            <Grid item md={6}>
              <h1>{productDetails.title}</h1>
              <h3> Category: {productDetails.category}</h3>
              <h4> Price: {productDetails.price} BDT.</h4>
              <p>{productDetails.description}</p>
            </Grid>
          </Grid>
        ) : (
          <div>Loading...</div>
        )}
      </Card>
    </ProductDetailsWrap>
  );
};

export default ProductDetails;
