import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import ProductItem from "../../components/ProductItem";
import SearchProduct from "../../components/SearchProduct";
import SortProduct from "../../components/SortProduct";
import {
  getCategoryByProductList,
  getSortingByProductList,
  removeProductByProductId,
  setProductsList,
} from "../../redux/actions/products/productActions";

const Title = styled.h1`
  margin: 30px 0px;
  width: 90%;
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
const ProductTitleFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
  & .product_filter {
    width: 30%;
  }
  & .product_search {
    width: 30%;
    padding-right: 20px;
  }
`;
const Loader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Index = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.getAllProducts);
  const dispatch = useDispatch();
  const productList = products;

  useEffect(() => {
    dispatch(setProductsList());
  }, []);

  const getSortByProduct = (sorting) => {
    dispatch(getSortingByProductList(sorting));
  };
  const getCategoryWiseProduct = (category) => {
    dispatch(getCategoryByProductList(category));
  };

  const productPage = () => {
    dispatch(removeProductByProductId());
    navigate("/product", { replace: true });
  };

  return (
    <Container>
      <ProductWrap>
        <ProductTitle>
          <Title>Product List</Title>
          <Button variant="contained" onClick={productPage}>
            Add New
          </Button>
        </ProductTitle>

        <ProductTitleFilter>
          <div className="product_search">
            <SearchProduct getCategoryWiseProduct={getCategoryWiseProduct} />
          </div>
          <div className="product_filter">
            <SortProduct getSortByProduct={getSortByProduct} />
          </div>
        </ProductTitleFilter>
      </ProductWrap>

      {productList.length > 0 ? <ProductItem productList={productList} /> : <Loader>Loading...</Loader>}
    </Container>
  );
};

export default Index;
