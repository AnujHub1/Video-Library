import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "./AdminLogin.css"; // Import external CSS

export default function AdminLogin() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      UserId: "",
      Password: "",
    },
    onSubmit: (admin) => {
      axios.get(`http://127.0.0.1:5000/admin`).then((response) => {
        var user = response.data.find((item) => item.UserId === admin.UserId);
        if (user) {
          if (user.Password === admin.Password) {
            navigate("/admin-dash");
          } else {
            alert("Invalid Password");
          }
        } else {
          alert("Invalid UserId");
        }
      });
    },
  });

  return (
    <Container className="admin-login-container">
      <form onSubmit={formik.handleSubmit} className="admin-login-form">
        <Typography variant="h4" component="h3">
          Admin Login
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Admin User Name"
          name="UserId"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.UserId}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="Password"
          type="password"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.Password}
        />
        <Button
          type="submit"
          variant="contained"
          className="btn-login w-100"
          fullWidth
        >
          Login
        </Button>
      </form>
    </Container>
  );
}
