import React from "react";

const VideoCard = ({ info }) => {
  if (info.length == 0) return;
  const { contentDetails, snippet, statistics } = info;
  const { thumbnails, title } = snippet;

  const constructTime = (duration) => {
    const match = duration.match(/PT(\d+M)?(\d+S)?/);
    const minutes = match[1] ? parseInt(match[1]) : 0;
    const seconds = match[2] ? parseInt(match[2]) : 0;

    return `${minutes}:${seconds.toString().padStart(2, 0)}`;
  };

  const convertViews = (views) => {
    if (views < 1_000_000) {
      return `${Math.floor(views / 1_000)}K`;
    }
    return `${Math.floor(views / 1_000_000)}M`;
  };

  return (
    <div className="relative w-[30%] h-72 p-2 flex flex-col gap-2 cursor-pointer">
      <div className="img-container relative w-[100%] h-[60%] rounded-lg">
        <img
          className="w-full h-full relative object-cover rounded-lg"
          src={thumbnails.standard.url}
        />
        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded-lg">
          {constructTime(contentDetails.duration)}
        </div>
      </div>
      <div className="font-normal text-sm">{title}</div>
      <div className="font-normal text-xs text-[#aaaaaa]">
        {snippet.channelTitle}
      </div>
      <div className="font-normal text-xs text-[#aaaaaa]">
        {convertViews(statistics.viewCount)} views
      </div>
    </div>
  );
};

export default VideoCard;
