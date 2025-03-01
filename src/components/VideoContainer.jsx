import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import getAccessToken from "../utils/FetchAccessToken";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/redux/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.video);

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
    dispatch(addVideos(data.items));
  };
  return (
    <div className="mt-4 p-2 h-[calc(100vh-5rem)] flex flex-row flex-wrap gap-12 overflow-y-auto scrollbar-hide">
      {videos.map((video) => (
        <Link
          className="relative w-[30%] h-72 p-2 flex flex-col gap-2 cursor-pointer hover:scale-110 transition duration-300"
          to={"watch?v=" + video.id}
        >
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
