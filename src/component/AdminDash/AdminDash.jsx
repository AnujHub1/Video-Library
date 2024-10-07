import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import "./AdminDash.css"; // Import external CSS

export default function AdminDash() {
  const [videos, setVideos] = useState([]);

  function LoadVideos() {
    axios.get(`http://127.0.0.1:5000/videos`).then((response) => {
      setVideos(response.data);
    });
  }

  useEffect(() => {
    LoadVideos();
  }, []);

  return (
    <Container className="admin-dash-container">
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <div className="add-video-btn">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/add-video"
          startIcon={<i className="bi bi-camera-video"></i>}
        >
          Add Video
        </Button>
      </div>
      <div className="table-responsive">
        <Table className="table-hover" aria-label="videos table">
          <TableHead>
            <TableRow>
              <TableCell className="btn-table">Title</TableCell>
              <TableCell className="btn-table">Preview</TableCell>
              <TableCell className="btn-table">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {videos.map((video) => (
              <TableRow key={video.VideoId}>
                <TableCell>{video.Title}</TableCell>
                <TableCell>
                  <iframe
                    src={video.Url}
                    width="200"
                    height="100"
                    title={video.Title}
                    allowFullScreen
                  ></iframe>
                </TableCell>
                <TableCell className="video-actions">
                  <Button
                    variant="outlined"
                    color="warning"
                    component={Link}
                    to={`/edit-video/${video.VideoId}`}
                    startIcon={<i className="bi bi-pen"></i>}
                  >
                    Edit
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    variant="outlined"
                    color="error"
                    component={Link}
                    to={`/delete-video/${video.VideoId}`}
                    startIcon={<i className="bi bi-trash"></i>}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
}
