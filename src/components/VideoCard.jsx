import React, { useEffect } from "react";
import { ACCESS_TOKEN, YOUTUBE_VIDEOS_URL } from "../utils/constants";
import getAccessToken from "../utils/FetchAccessToken";

const VideoCard = () => {
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
    console.log(data);
  };
  return <div>VideoCard</div>;
};

export default VideoCard;
