import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import "./UserLogin.css"; // You can still keep your external CSS for specific styling

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
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
          User Login
        </h3>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* UserId Field */}
          <div>
            <label
              htmlFor="UserId"
              className="block text-sm font-medium text-gray-700"
            >
              User ID
            </label>
            <input
              type="text"
              name="UserId"
              onChange={formik.handleChange}
              value={formik.values.UserId}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your User ID"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="Password"
              onChange={formik.handleChange}
              value={formik.values.Password}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your Password"
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
            >
              Login
            </button>
          </div>

          {/* Link to Register */}
          <div className="text-center mt-4">
            <p className="text-gray-600">
              New User?{" "}
              <Link
                to="/user-register"
                className="text-indigo-600 hover:underline"
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
