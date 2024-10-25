import axios from "axios";
import { useFormik } from "formik";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function UserRegister() {
  const [status, setStatus] = useState("");
  const [errorClass, setErrorClass] = useState("");

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      UserId: "",
      UserName: "",
      Password: "",
      Email: "",
      Mobile: "",
    },
    onSubmit: useCallback(
      (user) => {
        axios.post(`http://127.0.0.1:5000/register-user`, user).then(() => {
          alert("Registered Successfully!");
          navigate("/user-login");
        });
      },
      [navigate]
    ),
  });

  function VerifyUser(e) {
    axios.get(`http://127.0.0.1:5000/users`).then((response) => {
      const user = response.data.find((item) => item.UserId === e.target.value);
      if (user) {
        setStatus("User ID Taken - Try Another");
        setErrorClass("text-red-600");
      } else {
        setStatus("User ID Available");
        setErrorClass("text-green-600");
      }
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Register User
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* UserId */}
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
              onKeyUp={VerifyUser}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className={`text-sm mt-1 ${errorClass}`}>{status}</p>
          </div>

          {/* UserName */}
          <div>
            <label
              htmlFor="UserName"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              type="text"
              name="UserName"
              onChange={formik.handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="Email"
              onChange={formik.handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Mobile */}
          <div>
            <label
              htmlFor="Mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile
            </label>
            <input
              type="text"
              name="Mobile"
              onChange={formik.handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
            >
              Register
            </button>
          </div>

          {/* Existing User Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/user-login" className="text-indigo-600 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
