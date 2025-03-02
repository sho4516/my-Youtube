import React, { useEffect } from "react";
import getAccessToken from "../utils/FetchAccessToken";
import { fetchLiveChatId, fetchLiveChatMessages } from "../utils/LiveChat";
import { useDispatch, useSelector } from "react-redux";
import LiveChatMessage from "./LiveChatMessage";

const LiveChat = ({ videoId }) => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.liveChat);

  useEffect(() => {
    let intervalId = null;
    const fetchData = async () => {
      const accessToken = await getAccessToken();
      const id = await fetchLiveChatId(videoId, accessToken);
      if (id) {
        intervalId = setInterval(
          () => fetchLiveChatMessages(id, accessToken, dispatch),
          100
        );
      }
    };

    fetchData();
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="w-full flex flex-col gap-2 rounded-lg">
      {messages.map((message) => (
        <LiveChatMessage
          name={message.name}
          message={message.message}
          profileImageUrl={message.profileImageUrl}
        />
      ))}
    </div>
  );
};

export default LiveChat;
