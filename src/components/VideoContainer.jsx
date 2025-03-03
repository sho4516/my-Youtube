import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import getAccessToken from "../utils/FetchAccessToken";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/redux/videoSlice";
import { addVideosNotLoading } from "../utils/redux/appSlice";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.video);
  const { isVideosLoading } = useSelector((state) => state.app);

  useEffect(() => {
    if (videos.length == 0) fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const newAccessToken = await getAccessToken();
    console.log(newAccessToken);
    const response = await fetch(YOUTUBE_VIDEOS_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${newAccessToken}`,
        Accept: "application/json",
      },
    });

    const data = await response.json();
    dispatch(addVideos(data.items));
    console.log(data.items);
    dispatch(addVideosNotLoading());
  };
  return (
    <div className="mt-4 p-2 h-[calc(100vh-5rem)] flex flex-row flex-wrap gap-12 overflow-y-auto scrollbar-hide">
      {!isVideosLoading &&
        videos &&
        videos.map((video) => (
          <Link
            className="relative w-[30%] h-72 p-2 flex flex-col gap-2 cursor-pointer hover:scale-110 transition duration-300"
            to={"watch?v=" + video.id + "&title=" + video?.snippet?.title}
          >
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
      {isVideosLoading &&
        [...Array(8)].map((_, index) => <Shimmer key={index} />)}

      {!isVideosLoading &&
        !videos &&
        [...Array(8)].map((_, index) => <Shimmer key={index} />)}
    </div>
  );
};

export default VideoContainer;
