import { addMessage } from "./redux/liveChatSlice";

export const fetchLiveChatId = async (videoId, token) => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );
  const data = await res.json();
  const liveChatId = data.items[0]?.liveStreamingDetails?.activeLiveChatId;
  return liveChatId;
};

export const fetchLiveChatMessages = async (liveChatId, token, dispatch) => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${liveChatId}&part=snippet,authorDetails`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    }
  );
  const data = await res.json();
  const detailsArray = data.items.map((item) => {
    return {
      name: item?.authorDetails?.displayName,
      message: item?.snippet?.displayMessage,
      profileImageUrl: item?.authorDetails?.profileImageUrl,
    };
  });
  dispatch(addMessage(detailsArray));
};
