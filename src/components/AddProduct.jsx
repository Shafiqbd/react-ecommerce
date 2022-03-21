import { Card, FormControl, Grid, InputLabel, OutlinedInput, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const AddProduct = () => {
  const formData = useSelector((state) => state.insertProduct.productData);
  console.log(formData);

  return (
    <Grid container spacing={0}>
      <Grid item md={6}>
        <Card style={{ padding: "15px" }}>
          <Form>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Category</InputLabel>
                <OutlinedInput id="outlined-adornment-amount" label="Category" />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Product</InputLabel>
                <OutlinedInput id="outlined-adornment-amount" label="Product" />
              </FormControl>

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
                <OutlinedInput id="outlined-adornment-amount" label="Price" />
              </FormControl>

              {/* <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter Description" style={{ height: "100px" }} />
              </Form.Group> */}

              <TextField
                fullWidth
                autoComplete="service_description"
                label="Service Description"
                type="text"
                multiline
                rows={3}
                maxRows={4}
                name="service_description"
                // value={user.service_description ? user.service_description : ''}
                // onChange={handleInputChange}
              />

              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </Form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AddProduct;
