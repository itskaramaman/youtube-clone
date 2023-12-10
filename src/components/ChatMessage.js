const ChatMessage = ({ thumbnail, name, message }) => {
  return (
    <div className="flex gap-2 p-2">
      {thumbnail ? (
        <img className="h-6 rounded-full" alt="chat-icon" src={thumbnail} />
      ) : (
        <p className="h-6 w-6 rounded-full bg-purple-500 text-white font-medium text-center ">
          {name.substring(0, 1).toUpperCase()}
        </p>
      )}

      <span className="font-semibold text-gray-500 text-sm">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
