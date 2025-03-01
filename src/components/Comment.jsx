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
    <div className="flex flex-row justify-start w-full h-auto px-2 py-2 mt-2 items-center gap-3">
      <div className="w-10 h-10 rounded-full relative">
        <img
          className="w-full h-full rounded-full object-cover"
          src={authorProfileImageUrl}
          alt="userImage"
        />
      </div>
      <div className="flex flex-col justify-start gap-1">
        <div className="text-sm">{authorDisplayName}</div>
        <div className="text-lg">{textOriginal}</div>
      </div>
    </div>
  );
};

export default Comment;
