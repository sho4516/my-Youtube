import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideosLoading, toggleSideMenu } from "../utils/redux/appSlice";
import { addSearchSuggestions } from "../utils/redux/searchSlice";
import { fetchVideos } from "../utils/FetchVideos";

const Head = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((state) => state.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        fetchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText, searchCache]);

  const toggleMenuHandler = () => {
    dispatch(toggleSideMenu());
  };

  const fetchSuggestions = async () => {
    const response = await fetch(
      `https://youtubesearchapi-u6ni.onrender.com/suggest?q=${searchText}`
    );
    const data = await response.json();
    dispatch(addSearchSuggestions({ [searchText]: data[1] }));
  };

  const handleSearchClick = async (suggestion) => {
    dispatch(addVideosLoading());
    setSearchText("");
    fetchVideos(suggestion, dispatch);
  };

  return (
    <div className="header flex flex-row h-15 w-screen py-3 px-3 fixed items-center z-1000 top-0 bg-black">
      <div className="w-[15%] flex flex-row justify-start gap-4 relative items-center">
        <div className="h-12 w-10 relative cursor-pointer flex justify-center items-center">
          <i
            className="fa-solid fa-bars text-3xl font-light"
            onClick={toggleMenuHandler}
          ></i>
        </div>
        <div className="h-12 w-20 relative">
          <img
            className="w-full h-full object-cover"
            alt="logo"
            src="https://i.pinimg.com/736x/82/a1/f6/82a1f6c92420ee6bf10e1941ebc7f00b.jpg"
          />
        </div>
      </div>
      <div className="w-[70%] h-12 flex flex-row justify-center relative items-center">
        <div className="w-[60%] flex flex-row justify-center relative items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-[90%] border-1 border-[#303031] rounded-l-[15px] focus:outline-none px-5 py-1 relative"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onBlur={() => setTimeout(() => setSuggestions([]), 200)}
          />
          <button
            type="button"
            className="w-auto relative border-[#303031] border-1 border-l-0 rounded-r-[15px] h-full px-3 py-1 cursor-pointer bg-[#222223]"
            onClick={() => handleSearchClick(searchText)}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div
          className={`absolute w-[55%] top-12 flex flex-col bg-[#272727;] text-white rounded-lg gap-2 shadow-lg ${
            suggestions.length > 0 ? "block" : "hidden"
          }`}
        >
          {suggestions.length > 0 &&
            suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="w-full px-4 pt-3 h-full flex gap-3 items-center cursor-pointer hover:bg-[#232222] transition-all last:pb-3"
                onClick={() => handleSearchClick(suggestion)}
              >
                <i class="fa-solid fa-magnifying-glass"></i>
                {suggestion}
              </div>
            ))}
        </div>
      </div>
      <div className="w-[15%] h-12 flex flex-row justify-end relative items-center">
        <div className="h-12 w-12 relative mr-4 cursor-pointer">
          <img
            className="w-full h-full object-cover rounded-4xl"
            alt="userIcon"
            src="/userIcon.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
