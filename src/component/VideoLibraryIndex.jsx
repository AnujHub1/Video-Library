import React from "react";
import { Link } from "react-router-dom";

export default function VideoLibraryIndex() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <Link to="user-login" className=" btn btn-success text-white">
        User Login
      </Link>
      <Link to="admin-login" className="btn btn-primary text-white mx-3">
        Admin Login
      </Link>
    </div>
  );
}
