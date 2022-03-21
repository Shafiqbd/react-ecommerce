import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../utils/api";

const SearchProduct = ({ getCategoryWiseProduct }) => {
  const { categoryList } = useSelector((state) => state.getAllCategoryList);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  // const [categoryList, setCategoryList] = useState([]);

  const handleChange = (event) => {
    setCategory(event);
  };

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="Category"
        onChange={(e) => {
          handleChange(e.target.value);
          getCategoryWiseProduct(e.target.value);
        }}
      >
        {categoryList.map((data, i) => (
          <MenuItem value={data} key={i}>
            {data}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SearchProduct;
