const ChatMessage = ({ thumbnail, name, message }) => {
  return (
    <div className="flex gap-2 p-2">
      <img
        className="h-6"
        alt="chat-icon"
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
      />
      <span className="font-semibold text-gray-500 text-sm">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
