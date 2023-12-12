import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { ReactComponent as SendLogo } from "../icons/send.svg";
import liveMessages from "../utils/liveMessages";

const LiveChat = () => {
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage({ name: "Karamjeet", message: inputMessage }));
    setInputMessage("");
  };

  useEffect(() => {
    const intervals = [];
    liveMessages.forEach((message) => {
      const interval = setInterval(() => {
        dispatch(addMessage(message));
      }, 3000);
      intervals.push(interval);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div>
      <div
        className={`border  w-[420px] ${
          showLiveChat ? "rounded-t-md" : "rounded-full"
        }`}
      >
        <h1
          onClick={() => setShowLiveChat(!showLiveChat)}
          className="p-1 text-center font-bold cursor-pointer hover:bg-gray-100"
        >
          {showLiveChat ? "Hide Live Chat" : "Show Live Chat"}
        </h1>
        {showLiveChat && (
          <div className="flex flex-col-reverse h-[320px] overflow-y-auto">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                thumbnail={message.thumbnail}
                name={message.name}
                message={message.message}
              />
            ))}
          </div>
        )}
      </div>

      {showLiveChat && (
        <form
          onSubmit={handleFormSubmit}
          className="border flex p-1 items-center"
        >
          <img
            className="h-6 pl-1"
            alt="chat-icon"
            src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          />
          <span className="font-semibold mx-2 text-sm">Karamjeet</span>
          <input
            className="w-full focus:outline-none text-sm text-gray-600"
            placeholder="chat..."
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button onClick={() => handleFormSubmit}>
            <SendLogo />
          </button>
        </form>
      )}
    </div>
  );
};

export default LiveChat;
