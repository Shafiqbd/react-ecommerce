import { Card, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Form } from "react-bootstrap";

const AddProduct = () => {
  return (
    <Grid container spacing={0}>
      <Grid item md={6}>
        <Card style={{ padding: "15px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category Name</Form.Label>
              <Form.Control placeholder="Enter Category" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicProduct">
              <Form.Label>Product Name</Form.Label>
              <Form.Control placeholder="Enter Product" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control placeholder="Enter Price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" placeholder="Enter Description" style={{ height: "100px" }} />
            </Form.Group>

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AddProduct;
