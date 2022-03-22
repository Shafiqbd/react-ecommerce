import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_PRODUCTS } from "../../redux/contants/action-type";
import { deleteProduct } from "../../utils/api";

export default function Action({ id, index }) {
  const { products } = useSelector((state) => state.getAllProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = products;

  const OnClickdeleteProduct = async () => {
    const deleteData = await deleteProduct(id);
    if (deleteData) {
      productList.splice(index, 1);
      dispatch({
        type: SET_PRODUCTS,
        payload: productList,
      });
    } else {
      alert("Delete not Successfully!!");
    }
  };
  const editProduct = () => {
    navigate(`/product/${id}`, { replace: true });
  };

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
