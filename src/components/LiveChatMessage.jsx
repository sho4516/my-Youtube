import React from "react";

const LiveChatMessage = ({ name, message, profileImageUrl }) => {
  return (
    <div className="flex bg-white/30 w-full text-white p-2 items-center rounded-lg gap-2">
      <img
        className="w-10 h-10 object-cover rounded-full"
        src={profileImageUrl}
        alt="userimage"
      />
      <span className="font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default LiveChatMessage;
