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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
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
