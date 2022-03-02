import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AddProduct = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
      }}
    >
      <TextField helperText="Please enter your name" id="demo-helper-text-aligned" label="Name" />
      <TextField helperText=" " id="demo-helper-text-aligned-no-helper" label="Name" />
    </Box>
  );
};

export default AddProduct;
