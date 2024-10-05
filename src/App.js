import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoLibraryIndex from "./component/VideoLibraryIndex";
import AdminLogin from "./component/AdminLogin";
import AdminDash from "./component/AdminDash";
import Addvideo from "./component/Addvideo";
import DeleteVideo from "./component/DeleteVideo";
import EditVideo from "./component/EditVideo";
import { UserLogin } from "./component/UserLogin";
import { UserDashboard } from "./component/UserDash";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <header className="bg-dark text-white p-2 text-center">
          <h2>Video Library</h2>
        </header>

        <section>
          <Routes>
            <Route path="/" element={<VideoLibraryIndex />} />
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
