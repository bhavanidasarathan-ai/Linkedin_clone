import "../styles/rightsidebar.css";

function RightSidebar() {
  return (
    <div className="right-sidebar">

      <div className="news-card">

        <h3>LinkedIn News</h3>

        <ul>
          <li>AI skills are trending in 2026</li>
          <li>Top tech companies hiring summer intern</li>
          <li>Tech Talks by students and professionals </li>
          <li>Future of web development</li>
        </ul>

      </div>


      <div className="people-card">

        <h3>People you may know</h3>

        <div className="person">
          <div className="person-image">S</div>
          <div>
            <b>Shruti K</b>
            <p>CSE Student</p>
            <button>Connect</button>
          </div>
        </div>


        <div className="person">
          <div className="person-image">P</div>
          <div>
            <b>Priyavalli</b>
            <p>Developer</p>
            <button>Connect</button>
          </div>
        </div>

      </div>


      <div className="trending-card">

        <h3>Trending Topics</h3>

        <p>#ArtificialIntelligence</p>
        <p>#ReactJS</p>
        <p>#WebDevelopment</p>
        <p>#Internships</p>

      </div>


    </div>
  );
}

export default RightSidebar;