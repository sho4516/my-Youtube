import React from "react";

const Comment = ({ comment }) => {
  if (!comment) return null;
  const data = comment?.snippet?.topLevelComment?.snippet;
  const {
    authorProfileImageUrl,
    authorDisplayName,
    publishedAt,
    textOriginal,
  } = data;

  return (
    <div className="flex flex-row justify-start w-full h-auto px-2 py-2 mt-2 items-start bg-white/30 rounded-lg mb-4">
      <div className="w-[5%] rounded-full relative">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={authorProfileImageUrl}
          alt="userImage"
        />
      </div>
      <div className="flex w-[95%] flex-col justify-start gap-1">
        <div className="text-sm">{authorDisplayName}</div>
        <div className="text-md">{textOriginal}</div>
      </div>
    </div>
  );
};

export default Comment;
