import Navbar from "../components/Navbar";
import Leftsidebar from "../components/Leftsidebar";
import Feed from "../components/Feed";
import Rightsidebar from "../components/Rightsidebar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home">
        <Leftsidebar />
        <Feed />
        <Rightsidebar />
      </div>
    </>
  );
}

export default Home;