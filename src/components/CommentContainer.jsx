import React, { useEffect, useRef, useState } from "react";
import getAccessToken from "../utils/FetchAccessToken";
import axios from "axios";
import Comment from "./Comment";

const CommentContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async (pageToken = "") => {
    try {
      const accessToken = await getAccessToken();

      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/commentThreads`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
          params: {
            part: "snippet",
            videoId: videoId,
            maxResults: 30,
            pageToken: pageToken,
          },
        }
      );

      console.log(response.data.items);
      setComments(response.data.items);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  return (
    <div className="w-full flex-1 overflow-y-auto scrollbar-hide mt-2">
      <div className="font-extrabold text-xl">Comments </div>
      {comments.length > 0 &&
        comments.map((comment) => <Comment comment={comment} />)}
    </div>
  );
};

export default CommentContainer;
