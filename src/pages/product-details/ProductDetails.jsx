import { Button, Card, Grid, Rating } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ButtonStyle from "../../components/ButtonStyle";
import Action from "./Action";

const Title = styled.h2`
  margin: 0;
  padding-left: 20px;
`;
const ProductDetailsWrap = styled.div`
  & h1 {
    font-size: 30px;
    font-weight: normal;
  }
  & h4 {
    color: #000;
    font-size: 24px;
    font-weight: 500;
    padding-top: 10px;
  }
  & h3 {
    color: gray;
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;
    text-transform: uppercase;
  }

  & p {
    line-height: 30px;
    text-align: justify;
  }
`;
const ImgContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  height: 400px;
  & img {
    // height: auto;
    width: 100%;
  }
`;
const RatingContent = styled(Rating)`
  color: #000;
  font-size: 18px;
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px;
`;
const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ButtonContent = styled.div``;
const ProductDetails = ({ productDetails, setProductDetails, setProductList, productList }) => {
  const back = () => {
    setProductDetails(null);
  };
  return (
    <ProductDetailsWrap>
      <ActionWrapper>
        <TitleWrap>
          <Button variant="contained" onClick={back}>
            Back
          </Button>
          <Title>Product Details</Title>
        </TitleWrap>
        {productDetails && (
          <Action
            setProductList={setProductList}
            productList={productList}
            id={productDetails.id}
            setProductDetails={setProductDetails}
          />
        )}
      </ActionWrapper>

      <Card style={{ padding: "15px" }}>
        {productDetails ? (
          <Grid container spacing={4}>
            <Grid item md={6}>
              <ImgContent>
                <img src={productDetails.image} alt="" />
              </ImgContent>
            </Grid>
            <Grid item md={6}>
              <h3> {productDetails.category}</h3>
              <h1>{productDetails.title}</h1>
              <RatingContent name="read-only" value={productDetails?.rating?.rate} readOnly />
              <h4> {productDetails.price} BDT.</h4>
              <p>{productDetails.description}</p>
              <ButtonContent>
                <ButtonStyle btnName={"Add to Cart"} width={"140px"} margin_left={"0px"} back={""} />
                <ButtonStyle btnName={"Go to Cart"} width={"140px"} margin_left={"15px"} back={"bg"} />
              </ButtonContent>
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
