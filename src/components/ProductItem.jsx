import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
import { getProductDetails, getProductSorting } from "../utils/api";
import SearchProduct from "./SearchProduct";
import SortProduct from "./SortProduct";

const Title = styled.h1`
  margin: 30px 0px;
  width: 20%;
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
const ProductTitleFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .product_filter {
    width: 20%;
  }
  & .product_search {
    width: 60%;
    padding: 0 20px;
  }
`;
const CustGrid = styled(Grid)`
  &:hover {
    cursor: pointer;
  }
`;
const ProductItem = ({ productList, setProductDetails, setProductList }) => {
  const onClickProductDetails = async (id) => {
    const product = await getProductDetails(id);
    console.log("product", product);
    if (product) {
      setProductDetails(product);
    }
  };
  const getSortByProduct = async (sorting) => {
    const productData = await getProductSorting(sorting);
    console.log("product", productData);
    if (productData) {
      // setProductDetails(product);
      setProductList(productData);
    }
  };
  return (
    <ProductWrap>
      <ProductTitleFilter>
        <Title>Product List</Title>
        <div className="product_search">
          <SearchProduct />
        </div>
        <div className="product_filter">
          <SortProduct getSortByProduct={getSortByProduct} />
        </div>
      </ProductTitleFilter>

      <Grid container spacing={4}>
        {productList.map((data, index) => (
          <CustGrid item md={4} key={index} onClick={() => onClickProductDetails(data.id)}>
            <Card style={{ padding: "15px" }}>
              <CardMedia component="img" height="194" image={data.image} alt={data.title[0]} />
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {data.title[0]}
                  </Avatar>
                }
                title={data.title.substr(1, 20) + "..."}
                subheader={data.price + " " + "BDT"}
              />
              <p>{data.description.substr(1, 100) + "..."}</p>
            </Card>
          </CustGrid>
        ))}
      </Grid>
    </ProductWrap>
  );
};

export default ProductItem;
