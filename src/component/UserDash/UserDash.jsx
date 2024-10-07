import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./UserDash.css"; // Import external CSS

export function UserDashboard() {
  const [cookies, setCookies, removeCookie] = useCookies(["userid"]);
  const [videos, setVideos] = useState([]);

  function LoadVideos() {
    axios.get(`http://127.0.0.1:5000/videos`).then((response) => {
      setVideos(response.data);
    });
  }

  useEffect(() => {
    LoadVideos();
  }, []);

  let navigate = useNavigate();

  function handleSignout() {
    removeCookie("userid");
    navigate("/");
  }

  return (
    <Container maxWidth="lg" className="dashboard-container">
      <div className="dashboard-header">
        <Typography variant="h4">User Dashboard</Typography>
        <Typography variant="h6">{cookies["userid"]}</Typography>
        <Button variant="contained" color="error" onClick={handleSignout}>
          Signout
        </Button>
      </div>

      <div className="video-list">
        {videos.map((video) => (
          <Card key={video.VideoId} className="video-card">
            <iframe
              src={video.Url}
              width="100%"
              height="200"
              className="video-frame"
              allowFullScreen
              title={video.Title}
            ></iframe>
            <CardHeader title={video.Title} />
            <CardActions>
              <Button startIcon={<i className="bi bi-eye-fill"></i>}>
                {video.Views}
              </Button>
              <Button startIcon={<i className="bi bi-hand-thumbs-up"></i>}>
                {video.Likes}
              </Button>
              <Button startIcon={<i className="bi bi-hand-thumbs-down"></i>}>
                {video.Dislikes}
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Container>
  );
}
