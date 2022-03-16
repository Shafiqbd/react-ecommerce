import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/products/productActions";
import { deleteProduct } from "../../utils/api";

export default function Action({ id, index }) {
  const { products } = useSelector((state) => state.getAllProducts);
  const dispatch = useDispatch();
  const productList = products;

  const OnClickdeleteProduct = async () => {
    await deleteProduct(id);
    if (id) {
      productList.splice(index, 1);
      dispatch(setProducts(productList));
    }
  };
  const editProduct = () => {};

  return (
    <div className="edit_option">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-autoclose-true">
          <IconButton aria-label="more" id="long-button" aria-haspopup="true">
            <MoreVertIcon />
          </IconButton>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => editProduct()}>Edit</Dropdown.Item>
          <Dropdown.Item onClick={() => OnClickdeleteProduct()}>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
