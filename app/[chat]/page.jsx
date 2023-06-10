import ChatSideBar from "@/components/ChatSideBar";
import ChatWindow from "@/components/ChatWindow";

const Chat = () => {
  return (
    <>
      <div className="grid h-screen grid-cols-[260px_1fr] ">
        <ChatSideBar />
        <ChatWindow />
      </div>
    </>
  );
};

export default Chat;
