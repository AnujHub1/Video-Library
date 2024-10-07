import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container, Box } from "@mui/material";
import "./UserLogin.css"; // Import external CSS

export function UserLogin() {
  const [cookies, setCookies] = useCookies(["userid"]);
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      UserId: "",
      Password: "",
    },
    onSubmit: (user) => {
      axios.get(`http://127.0.0.1:5000/users`).then((response) => {
        const result = response.data.find(
          (item) => item.UserId === user.UserId
        );
        if (result) {
          if (user.Password === result.Password) {
            setCookies("userid", user.UserId);
            navigate("/user-dash");
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
    <Container maxWidth="sm" className="login-container">
      <form onSubmit={formik.handleSubmit}>
        <h3>User Login</h3>
        <dl>
          <dt>UserId</dt>
          <dd>
            <TextField
              fullWidth
              variant="outlined"
              name="UserId"
              onChange={formik.handleChange}
              value={formik.values.UserId}
              label="Enter your User ID"
              margin="normal"
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <TextField
              fullWidth
              type="password"
              variant="outlined"
              name="Password"
              onChange={formik.handleChange}
              value={formik.values.Password}
              label="Enter your Password"
              margin="normal"
            />
          </dd>
        </dl>
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>
      <Link to="/user-register">New User Register</Link>
    </Container>
  );
}
