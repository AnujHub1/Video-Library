import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";
import "./AddVideo.css"; // External CSS for additional styling

export default function AddVideo() {
  const [categories, setCategories] = useState([
    { CategoryId: 0, CategoryName: "Select Category" },
  ]);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      VideoId: 0,
      Title: "",
      Url: "",
      Likes: 0,
      Dislikes: 0,
      Views: 0,
      CategoryId: 0,
    },
    onSubmit: (video) => {
      axios
        .post("http://127.0.0.1:5000/add-video", video)
        .then(() => {
          alert("Video added successfully!");
          navigate("/admin-dash");
        })
        .catch((err) => console.log("Video addition failed", err));
    },
  });

  function LoadCategories() {
    axios.get("http://127.0.0.1:5000/categories").then((response) => {
      setCategories([
        { CategoryId: 0, CategoryName: "Select Category" },
        ...response.data,
      ]);
    });
  }

  useEffect(() => {
    LoadCategories();
  }, []);

  return (
    <Container>
      <h2>Add New Video</h2>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        sx={{ mt: 3, maxWidth: "600px", mx: "auto" }}
      >
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Video Id"
            type="number"
            variant="outlined"
            name="VideoId"
            value={formik.values.VideoId}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Title"
            variant="outlined"
            name="Title"
            value={formik.values.Title}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Video URL"
            variant="outlined"
            name="Url"
            value={formik.values.Url}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Likes"
            type="number"
            variant="outlined"
            name="Likes"
            value={formik.values.Likes}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Dislikes"
            type="number"
            variant="outlined"
            name="Dislikes"
            value={formik.values.Dislikes}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Views"
            type="number"
            variant="outlined"
            name="Views"
            value={formik.values.Views}
            onChange={formik.handleChange}
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            label="Category"
            name="CategoryId"
            value={formik.values.CategoryId}
            onChange={formik.handleChange}
          >
            {categories.map((category) => (
              <MenuItem key={category.CategoryId} value={category.CategoryId}>
                {category.CategoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
        >
          Add Video
        </Button>
        <Button
          component={Link}
          to="/admin-dash"
          variant="outlined"
          color="error"
        >
          Cancel
        </Button>
      </Box>
    </Container>
  );
}
