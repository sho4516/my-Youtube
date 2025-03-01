import React, { useState } from "react";
import Button from "./Button";
import { fetchVideos } from "../utils/FetchVideos";
import { useDispatch } from "react-redux";
import { addVideosLoading } from "../utils/redux/appSlice";

const buttons = [
  "All",
  "Music",
  "Furniture",
  "Architecture",
  "Comedy club",
  "Nusrat Fateh Ali Khan",
  "Mixes",
  "Software Engineering",
  "Disha Vakani",
  "Kapil Sharma",
  "Dramedy",
  "Empires",
  "Jukebox",
  "T-seris",
  "Apple",
  "Game-shows",
];

const ButtonList = () => {
  const [selected, setSelected] = useState("All");
  const dispatch = useDispatch();

  const handleButtonClick = (button) => {
    dispatch(addVideosLoading());
    setSelected(button);
    fetchVideos(button, dispatch);
  };

  return (
    <div className="flex flex-row gap-3 overflow-x-scroll scrollbar-hide whitespace-nowrap items-center">
      {buttons.map((button) => (
        <Button
          name={button}
          selected={selected}
          onClick={() => handleButtonClick(button)}
        />
      ))}
    </div>
  );
};

export default ButtonList;
