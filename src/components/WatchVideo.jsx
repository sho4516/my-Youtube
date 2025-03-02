import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSideMenu } from "../utils/redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchVideo = () => {
  const [params] = useSearchParams();
  const videoId = params.get("v");
  const title = params.get("title");
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.video);

  const [video, setVideo] = useState(null);

  useEffect(() => {
    dispatch(closeSideMenu());
    if (videos && videoId) {
      const foundVideo = getVideo();
      setVideo(foundVideo);
    }
  }, [videos, video, videoId, dispatch]);

  const getVideo = () => {
    return videos.find((video) => video.id == videoId);
  };

  return (
    <div className="flex w-full flex-row gap-2 h-[calc(100vh-5rem)]">
      <div className="w-[70%] h-[calc(100vh-5rem)] flex flex-col flex-nowrap overflow-hidden">
        <div className="w-[100%] h-[60%] flex-grow-0 flex-shrink-0">
          <iframe
            className="w-full h-full object-cover"
            src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full text-lg">{title}</div>

        <CommentContainer videoId={videoId} />
      </div>

      <div className="border-amber-50 border-2 w-[30%]"></div>
    </div>
  );
};

export default WatchVideo;
