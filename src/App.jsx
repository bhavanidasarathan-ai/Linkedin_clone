import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import Network from "./pages/Network";
import Messages from "./pages/Messages";
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
function Home() {
  return (
    <div className="home-layout">

      <LeftSidebar />

      <Feed />

      <RightSidebar />

    </div>
  );
}



 <><Route path="/network" element={<Network />} />
 <Route path="/jobs" element={<Jobs />} />
 <Route path="/messages" element={<Messages />} />
 <Route path="/dashboard" element={<Dashboard />} />
 <Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/profile" element={<Profile />} /> </>



function Notifications() {
  return (
    <div className="page">
      <h1>Notifications</h1>
      <p>You have new updates.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <div>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/network" element={<Network />} />

          <Route path="/jobs" element={<Jobs />} />

          <Route path="/messages" element={<Messages />} />

          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;