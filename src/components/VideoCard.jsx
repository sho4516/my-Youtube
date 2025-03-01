import React, { useState } from "react";

const VideoCard = ({ info }) => {
  if (info.length == 0) return;
  const { contentDetails, snippet, statistics, id } = info;
  const { thumbnails, title } = snippet;
  const [isHovered, setIsHovered] = useState(false);

  const constructTime = (duration) => {
    if (!duration) return "0:00";
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hrs = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;

    if (hrs != 0) {
      return `${hrs}:${minutes.toString().padStart(2, 0)}:${seconds
        .toString()
        .padStart(2, 0)}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, 0)}`;
    }
  };

  const convertViews = (views) => {
    if (views < 1_000_000) {
      return `${Math.floor(views / 1_000)}K`;
    }
    return `${Math.floor(views / 1_000_000)}M`;
  };

  return (
    <>
      <div
        className="img-container relative w-[100%] h-[60%] rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <iframe
            className="w-full h-full object-cover cursor-pointer"
            src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            className="w-full h-full relative object-cover rounded-lg"
            src={thumbnails?.standard?.url}
          />
        )}

        {!isHovered && (
          <div className="absolute bottom-2 right-2 bg-black/40 px-2 py-1 rounded-lg">
            {constructTime(contentDetails?.duration)}
          </div>
        )}
      </div>
      <div className="font-normal text-sm">{title}</div>
      <div className="font-normal text-xs text-[#aaaaaa]">
        {snippet.channelTitle}
      </div>
      <div className="font-normal text-xs text-[#aaaaaa]">
        {convertViews(statistics.viewCount)} views
      </div>
    </>
  );
};

export default VideoCard;
