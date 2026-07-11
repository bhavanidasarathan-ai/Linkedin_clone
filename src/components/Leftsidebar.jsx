import "../styles/leftsidebar.css";

function LeftSidebar() {
  return (
    <div className="left-sidebar">

      <div className="profile-card">

        <div className="cover"></div>

        <div className="profile-image">
          B
        </div>

        <h2>Bhavani D</h2>

        <p>B.Tech Computer Science Engineering</p>

        <p className="location">
          📍 India
        </p>

      </div>


      <div className="stats-card">

        <div>
          <span>Connections</span>
          <b>250</b>
        </div>

        <div>
          <span>Profile views</span>
          <b>120</b>
        </div>

      </div>


      <div className="links-card">

        <p>🔖 Saved Items</p>
        <p>👥 Groups</p>
        <p>📅 Events</p>
        <p>📰 Newsletters</p>

      </div>

    </div>
  );
}

export default LeftSidebar;