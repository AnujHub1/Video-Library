import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Box } from "@mui/system";
import "./EditVideo.css"; // Use an external CSS for additional styling

export default function EditVideo() {
  const [videos, setVideos] = useState({
    VideoId: 0,
    Title: "",
    Url: "",
    Likes: 0,
    Dislikes: 0,
    Views: 0,
    CategoryId: 0,
  });
  const [categories, setCategories] = useState([
    { CategoryId: 0, CategoryName: "Select Category" },
  ]);

  let params = useParams();
  let navigate = useNavigate();

  function LoadVideos() {
    axios.get(`http://127.0.0.1:5000/video/${params.id}`).then((response) => {
      setVideos(response.data);
    });
  }

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
    LoadVideos();
  }, [params.id]);

  const formik = useFormik({
    initialValues: {
      VideoId: videos.VideoId,
      Title: videos.Title,
      Url: videos.Url,
      Likes: videos.Likes,
      Dislikes: videos.Dislikes,
      Views: videos.Views,
      CategoryId: videos.CategoryId,
    },
    enableReinitialize: true,
    onSubmit: (video) => {
      axios
        .put(`http://127.0.0.1:5000/edit-video/${params.id}`, video)
        .then((response) => {
          alert("Video updated successfully");
          navigate("/admin-dash");
        });
    },
  });

  return (
    <Container>
      <h3>Edit Video</h3>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        sx={{ mt: 2 }}
      >
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="Video Id"
            type="number"
            variant="outlined"
            name="VideoId"
            value={formik.values.VideoId}
            onChange={formik.handleChange}
            disabled
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
          Save
        </Button>
        <Button
          component={Link}
          to="/admin-dash"
          variant="outlined"
          color="warning"
        >
          Cancel
        </Button>
      </Box>
    </Container>
  );
}
