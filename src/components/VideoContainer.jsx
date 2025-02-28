import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import getAccessToken from "../utils/FetchAccessToken";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const newAccessToken = await getAccessToken();
    const response = await fetch(YOUTUBE_VIDEOS_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${newAccessToken}`,
        Accept: "application/json",
      },
    });

    const data = await response.json();
    setVideos(data.items);
  };
  return (
    <div className="mt-4 p-2 h-[calc(100vh-5rem)] flex flex-row flex-wrap gap-12 overflow-y-auto scrollbar-hide">
      {videos.map((video) => (
        <VideoCard info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
