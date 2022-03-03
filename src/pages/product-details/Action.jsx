import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { deleteProduct } from "../../utils/api";
const options = ["Edit", "Delete"];

const ITEM_HEIGHT = 48;

export default function Action({ id, setProductDetails, productList, setProductList }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const OnClickdeleteProduct = async (id) => {
    await deleteProduct(id);
    if (id) {
      productList.splice(id, 1);
      setProductList((productList) => [...productList]);
    }
    setAnchorEl(null);
    setProductDetails(null);
  };
  const editProduct = () => {};

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            editProduct();
          }}
        >
          Edit
        </MenuItem>
        <MenuItem onClick={OnClickdeleteProduct}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
