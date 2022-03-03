import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { deleteProduct } from "../../utils/api";

export default function Action({ id, setProductDetails, productList, setProductList, index }) {
  const OnClickdeleteProduct = async () => {
    debugger;
    await deleteProduct(id);
    if (id) {
      productList.splice(index, 1);
      setProductList((productList) => [...productList]);
    }
    setProductDetails(null);
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
