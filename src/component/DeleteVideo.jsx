import axios from "axios";
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DeleteVideo() {
  const [videos, setVideos] = useState([
    {
      VideoId: 0,
      Title: "",
      Url: "",
      Likes: 0,
      Dislikes: 0,
      Views: 0,
      CategoryId: 0,
    },
  ]);

  const params = useParams();
  const navigate = useNavigate();

  function LeadVideo() {
    axios
      .get(`http://127.0.0.1:5000/video/${params.id}`)
      .then((response) => setVideos(response.data))
      .catch((err) => console.log("error at time delete", err));
  }

  function handleDeleteClick() {
    axios
      .delete(`http://127.0.0.1:5000/delete-video/${params.id}`)
      .then((response) => {
        alert("Deleted succuefully");
        navigate("/admin-dash");
      });
  }

  useEffect(() => {
    LeadVideo();
  }, []);

  return (
    <div>
      <h3>Delete video</h3>
      <div className="card" style={{ height: "300px", width: "400px" }}>
        <div className="card-image">
          <iframe src={videos[0].Url} alt="" />
        </div>
        <div className="card-header">{videos[0].Title}</div>
        <div className="card-footer">
          <Link className="btn btn-danger m-2" onClick={handleDeleteClick}>
            Delete
          </Link>
          <Link className="btn btn-warning m-2" to="/admin-dash">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
