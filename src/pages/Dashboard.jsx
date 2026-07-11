import { useState } from "react";
import "../styles/dashboard.css";


function Dashboard() {


  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || null
  );


  const [name, setName] = useState(
    localStorage.getItem("name") || "Bhavani D"
  );


  const [headline, setHeadline] = useState(
    localStorage.getItem("headline") ||
    "B.Tech Computer Science Engineering | React Developer"
  );



  const handleImage = (e) => {

    const file = e.target.files[0];

    if(file){

      const imageURL = URL.createObjectURL(file);

      setProfileImage(imageURL);

      localStorage.setItem(
        "profileImage",
        imageURL
      );

    }

  };



  const saveProfile = () => {

    localStorage.setItem(
      "name",
      name
    );

    localStorage.setItem(
      "headline",
      headline
    );

    alert("Profile Updated Successfully");

  };



  return (

    <div className="dashboard">


      <div className="profile-banner">


        <div className="dashboard-photo">

          {
            profileImage ? (

              <img 
                src={profileImage}
                alt="profile"
              />

            ) : (

              "B"

            )
          }

        </div>


        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
        />



        <h1>{name}</h1>


        <p>
          {headline}
        </p>


        <p>
          📍 India
        </p>


      </div>




      <div className="dashboard-card">


        <h2>About</h2>


        <p>
          Passionate Computer Science student interested in
          IoT, AI and Software Engineering.
        </p>


      </div>




      <div className="dashboard-card">


        <h2>Skills</h2>


        <div className="skills">


          <span>React</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>HTML</span>
          <span>CSS</span>


        </div>


      </div>





      <div className="dashboard-card">


        <h2>Education</h2>


        <h2>School</h2>

        <p>
          Everwin School
        </p>


        <h2>College</h2>

        <p>
          SRM University
        </p>


      </div>





      <div className="dashboard-card">


        <h2>Experience</h2>


        <p>
          Interned at QSkill Company
        </p>


        <p>
          Intern at IWP
        </p>


      </div>





      <div className="dashboard-card">


        <h2>Edit Profile</h2>


        <input

          type="text"

          placeholder="Enter name"

          value={name}

          onChange={(e)=>setName(e.target.value)}

        />



        <input

          type="text"

          placeholder="Enter headline"

          value={headline}

          onChange={(e)=>setHeadline(e.target.value)}

        />



        <button onClick={saveProfile}>

          Save Profile

        </button>


      </div>



    </div>

  );

}


export default Dashboard;