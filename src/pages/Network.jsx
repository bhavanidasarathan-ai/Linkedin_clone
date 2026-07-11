import "../styles/network.css";

function Network() {

  const people = [
    {
      name: "Shruti K",
      role: "CSE Student",
      letter: "S"
    },
    {
      name: "Priyavalli",
      role: "Frontend Developer",
      letter: "P"
    },
    {
      name: "Rahul",
      role: "Software Engineer",
      letter: "R"
    }
  ];


  return (
    <div className="network-page">

      <h2>My Network</h2>

      <div className="people-container">

        {people.map((person, index) => (

          <div className="network-card" key={index}>

            <div className="network-image">
              {person.letter}
            </div>

            <h3>{person.name}</h3>

            <p>{person.role}</p>

            <button>
              Connect
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Network;