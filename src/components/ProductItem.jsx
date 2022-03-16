import { CardMedia, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoadImg from "../assets/load_img.jpg";
import Action from "../pages/product-details/Action";

const CustGrid = styled(Grid)`
  &:hover {
    cursor: pointer;
  }
`;
const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 40px;
  background: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  & .action_menu {
    position: absolute;
    z-index: 99;
    right: 0px;
  }
`;

const ProductItem = ({ productList }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickProductDetails = async (id, i) => {
    if (id) {
      let data = {
        id: id,
        index: i,
      };
      navigate(`/productdetails/${JSON.stringify(data)}`, { replace: true });
    }
  };

  return (
    <Grid container spacing={3}>
      {productList.map((data, index) => (
        <CustGrid item md={4} key={index}>
          <ActionWrapper>
            <div className="action_menu">
              <Action id={data.id} index={index} />
            </div>
          </ActionWrapper>
          <Card style={{ padding: "15px" }} onClick={() => onClickProductDetails(data.id, index)}>
            {/* <p>{data.category}</p> */}
            <CardMedia component="img" height="194" image={data.image || LoadImg} alt={data.title[0]} />
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
  );
};

export default ProductItem;
