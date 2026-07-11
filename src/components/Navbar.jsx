import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim() !== "") {
      alert("Searching for: " + search);
    }
  };

  return (
    <div className="navbar">

      <div className="logo">
        LinkedIn
      </div>


      <div className="search-box">

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>
          🔍
        </button>

      </div>


      <div className="nav-links">

        <Link to="/">
          🏠 Home
        </Link>

        <Link to="/network">
          👥 My Network
        </Link>

        <Link to="/jobs">
          💼 Jobs
        </Link>

        <Link to="/messages">
          💬 Messaging
        </Link>

        <Link to="/notifications">
          🔔 Notifications
        </Link>

        <Link to="/dashboard">
          👤 Me
        </Link>

      </div>


    </div>
  );
}

export default Navbar;