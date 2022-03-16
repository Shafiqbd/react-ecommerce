import { Button, Card, Container, Grid, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import ButtonStyle from "../../components/ButtonStyle";
import { getProductByProductId, removeProductByProductId } from "../../redux/actions/products/productActions";
import { getProductDetails } from "../../utils/api";
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

const ProductDetails = () => {
  const [indexData, setIndexData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const productDetails = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(async () => {
    const paramData = JSON.parse(id);
    const detailsData = await getProductDetails(paramData.id);
    if (detailsData) {
      dispatch(getProductByProductId(detailsData));
      setIndexData(paramData.index);
    }
  }, [id]);

  const back = () => {
    dispatch(removeProductByProductId());
    navigate("/productlist", { replace: true });
  };
  return (
    <Container>
      <ProductDetailsWrap>
        <ActionWrapper>
          <TitleWrap>
            <Button variant="contained" onClick={back}>
              Back
            </Button>
            <Title>Product Details</Title>
          </TitleWrap>
          {productDetails && <Action id={productDetails.id} index={indexData} />}
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
    </Container>
  );
};

export default ProductDetails;
