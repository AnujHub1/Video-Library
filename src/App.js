import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoLibraryIndex from "./component/VideoLibrary/VideoLibraryIndex";
import AdminLogin from "./component/AdminLogin/AdminLogin";
import AdminDash from "./component/AdminDash/AdminDash";
import Addvideo from "./component/AddVideo/Addvideo";
import DeleteVideo from "./component/Delete/DeleteVideo";
import EditVideo from "./component/Edit/EditVideo";
import { UserLogin } from "./component/UserLogin/UserLogin";
import { UserDashboard } from "./component/UserDash/UserDash";
import { UserRegister } from "./component/UserRegister/User-Register";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="">
          <Navbar />
        </header>

        <section>
          <Routes>
            <Route path="/" element={<VideoLibraryIndex />} />
            <Route path="/user-register" element={<UserRegister />} />
            <Route path="admin-login" element={<AdminLogin />} />
            <Route path="admin-dash" element={<AdminDash />} />
            <Route path="add-video" element={<Addvideo />} />
            <Route path="delete-video/:id" element={<DeleteVideo />} />
            <Route path="edit-video/:id" element={<EditVideo />} />
            <Route path="user-login" element={<UserLogin />} />
            <Route path="user-dash" element={<UserDashboard />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
