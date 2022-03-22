import { Card, FormControl, Grid, InputLabel, OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProductInfo, handleInputChange } from "../redux/actions/products/productActions";

const AddProduct = () => {
  const product = useSelector((state) => state.getAllProducts.productData);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={0}>
      <Grid item md={6}>
        <Card style={{ padding: "15px" }}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(addProductInfo(product));
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Category</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={product.category}
                  name="category"
                  onChange={(e) => dispatch(handleInputChange(e))}
                  label="Category"
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Product</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={product.title}
                  label="Product"
                  name="title"
                  onChange={(e) => dispatch(handleInputChange(e))}
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={product.price}
                  label="Price"
                  name="price"
                  onChange={(e) => dispatch(handleInputChange(e))}
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Descriptiion</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={product.description}
                  name="description"
                  onChange={(e) => dispatch(handleInputChange(e))}
                  label="Description"
                  multiline
                  rows={3}
                  maxRows={4}
                />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1, flexDirection: "row-reverse" }}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </FormControl>
            </Box>
          </Form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AddProduct;
