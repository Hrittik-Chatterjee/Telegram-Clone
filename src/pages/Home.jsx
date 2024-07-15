import Sidebar from "../Components/Sidebar";
import ChatWindow from "../Components/ChatWindow";
import { useState } from "react";

const Home = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  const handleChatSelect = (chatId) => {
    setSelectedChatId(chatId);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar onChatSelect={handleChatSelect} />
      <ChatWindow selectedChatId={selectedChatId} />
    </div>
  );
};

export default Home;
