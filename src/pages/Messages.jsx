import "../styles/messages.css";

function Messages() {

  const chats = [
    {
      name: "Shruti K",
      message: "Hey! Congratulations on the project 🎉",
      letter: "S"
    },
    {
      name: "Priyavalli",
      message: "Let's update the LinkedIn clone UI",
      letter: "P"
    },
    {
      name: "Team Lead",
      message: "Meeting at 5 PM today",
      letter: "T"
    }
  ];


  return (
    <div className="messages-page">

      <h2>Messaging</h2>

      <div className="chat-container">

        <div className="chat-list">

          {chats.map((chat,index)=>(

            <div className="chat-card" key={index}>

              <div className="chat-image">
                {chat.letter}
              </div>

              <div>
                <h3>{chat.name}</h3>
                <p>{chat.message}</p>
              </div>

            </div>

          ))}

        </div>


        <div className="chat-window">

          <h3>Select a conversation</h3>

          <p>
            Start chatting with your connections.
          </p>

        </div>


      </div>

    </div>
  );
}

export default Messages;