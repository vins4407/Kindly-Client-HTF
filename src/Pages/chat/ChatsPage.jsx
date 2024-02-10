import { PrettyChatWindow } from "react-chat-engine-pretty";
import { useLocation } from "react-router-dom";

const ChatsPage = () => {
  const location = useLocation();
  const { state } = location;

  // Access state variables
  const { username, secret } = state;

  return (
    <div className=" h-96" >
      <PrettyChatWindow
        projectId={'4d43f041-6603-4a3e-9353-bb8fd025e914'}
        username={username}
        secret={secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
