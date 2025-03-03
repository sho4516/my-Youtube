import { useDispatch } from "react-redux";
import getAccessToken from "../utils/FetchAccessToken";
import { addVideos } from "../utils/redux/videoSlice";
import { addVideosNotLoading } from "./redux/appSlice";

export const fetchVideos = async (query, dispatch) => {
  try {
    const newAccessToken = await getAccessToken();
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=50&type=video`,
      {
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }
    const data = await response.json();
    const videoIds = data.items.map((item) => item.id.videoId).join(",");

    if (!videoIds) {
      console.error("No videos found");
      return;
    }

    fetchVideoDetails(videoIds, newAccessToken, dispatch);
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
};

export const fetchVideoDetails = async (videoIds, accessToken, dispatch) => {
  try {
    const detailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      }
    );

    if (!detailsResponse.ok) {
      throw new Error("Failed to fetch video details");
    }

    const detailsData = await detailsResponse.json();
    dispatch(addVideos(detailsData.items));
    dispatch(addVideosNotLoading());
  } catch (error) {
    console.error("Error fetching video details:", error);
  }
};
