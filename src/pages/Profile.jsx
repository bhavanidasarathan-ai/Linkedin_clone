import { useState } from "react";
import "../styles/profile.css";


function Profile() {


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

    localStorage.setItem("name", name);

    localStorage.setItem("headline", headline);

    alert("Profile Updated Successfully");

  };


  return (

    <div className="profile-page">


      <div className="profile-card">


        <div className="profile-photo">

          {
            profileImage ?

            <img
              src={profileImage}
              alt="profile"
            />

            :

            "B"

          }

        </div>


        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
        />



        <h1>{name}</h1>


        <p>{headline}</p>


        <p>
          📍 India
        </p>


      </div>




      <div className="profile-card">


        <h2>Edit Profile</h2>


        <input
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Enter name"
        />



        <input
          type="text"
          value={headline}
          onChange={(e)=>setHeadline(e.target.value)}
          placeholder="Enter headline"
        />



        <button onClick={saveProfile}>
          Save Profile
        </button>


      </div>




      <div className="profile-card">


        <h2>About</h2>

        <p>
          Passionate Computer Science student interested in
          IoT, AI and Software Engineering.
        </p>


      </div>




      <div className="profile-card">


        <h2>Skills</h2>


        <div className="skills">

          <span>React</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>AI/ML</span>

        </div>


      </div>



    </div>

  );

}


export default Profile;