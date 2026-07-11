import Post from "./Post";
import shrutiCertificate from "../assets/shruti_certificate.png";
import priyavalliCertificate from "../assets/priyavalli_certificate.png";

function Feed() {
  return (
    <div className="feed">

      <div className="create-post">
        <input type="text" placeholder="Start a post..." />
      </div>

      <Post
        name="Shruti K"
        role="CSE Student | Frontend Developer"
        content="🎉 Happy to share that I successfully completed the 'Frontend Web Development' certification. 
        Grateful for the opportunity to learn HTML, CSS, JavaScript, and React. Looking forward to building more real-world projects! 🏆📜"
        imgsrc={shrutiCertificate}
      />

      <Post
        name="Priyavalli"
        role="CSE Student | UI/UX Enthusiast"
        content="🏅 Excited to announce that I completed the 'UI/UX Design Essentials' certification. 
        This journey improved my design thinking, prototyping, and user experience skills. Thank you to everyone who supported me! 💙✨"
        imgsrc={priyavalliCertificate}
      />

    </div>
  );
}

export default Feed;