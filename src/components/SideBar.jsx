import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isSideMenuOpen);
  const [selected, setSelected] = useState("Home");

  if (!isMenuOpen) return null;

  const menuItems1 = [
    { id: 1, icon: "fa-house", label: "Home", route: "/" },
    { id: 2, icon: "fa-video", label: "Shorts" },
    { id: 3, icon: "fa-rss", label: "Subscriptions" },
    { id: 4, icon: "fa-music", label: "YouTube Music" },
  ];

  const menuItems2 = [
    { id: 1, icon: "fa-clock-rotate-left", label: "History" },
    { id: 2, icon: "fa-headphones", label: "Playlists" },
    { id: 3, icon: "fa-video", label: "Your Videos" },
    { id: 4, icon: "fa-film", label: "Your Movies" },
    { id: 4, icon: "fa-clock", label: "Watch Later" },
    { id: 4, icon: "fa-thumbs-up", label: "Liked Videos" },
    { id: 4, icon: "fa-download", label: "Downloads" },
  ];

  const menuItems3 = [
    { id: 1, icon: "fa-fire", label: "Trending" },
    { id: 2, icon: "fa-cart-shopping", label: "Shopping" },
    { id: 3, icon: "fa-music", label: "Music" },
    { id: 4, icon: "fa-film", label: "Movies" },
    { id: 4, icon: "fa-star-of-life", label: "Live" },
    { id: 4, icon: "fa-gamepad", label: "Gaming" },
    { id: 4, icon: "fa-newspaper", label: "News" },
    { id: 4, icon: "fa-medal", label: "Sports" },
    { id: 4, icon: "fa-discourse", label: "Courses" },
    { id: 4, icon: "fa-podcast", label: "Podcasts" },
  ];

  const handleMenuItemClick = (label) => {
    setSelected(label);
  };

  return (
    <div className="w-[20%] h-[90vh] overflow-y-auto scrollbar-hide">
      <ul className="after:content-[''] after:block after:h-[1px] after:bg-gray-700 after:my-4">
        {menuItems1.map((item) => (
          <Link to={item.route}>
            <li
              key={item.id}
              className={`mt-2 border-0 px-4 py-2 flex flex-row justify-start items-center gap-4 rounded-2xl cursor-pointer hover:bg-gray-500 transition ${
                selected === item.label ? "bg-gray-400" : ""
              }`}
              onClick={() => handleMenuItemClick(item.label)}
            >
              <i className={`fa-solid ${item.icon}`}></i>
              <div>{item.label}</div>
            </li>
          </Link>
        ))}
      </ul>

      <h1 className="ml-3 font-extrabold text-red-700">
        You<i class="fa-solid fa-arrow-right ml-2 font-light"></i>
      </h1>
      <ul className="after:content-[''] after:block after:h-[1px] after:bg-gray-700 after:my-4">
        {menuItems2.map((item) => (
          <li
            key={item.id}
            className={`mt-2 border-0 px-4 py-2 flex flex-row justify-start items-center gap-4 rounded-2xl cursor-pointer hover:bg-gray-500 transition ${
              selected === item.label ? "bg-gray-400" : ""
            }`}
            onClick={() => handleMenuItemClick(item.label)}
          >
            <i className={`fa-solid ${item.icon}`}></i>
            <div>{item.label}</div>
          </li>
        ))}
      </ul>

      <h1 className="ml-3 font-extrabold text-red-700">
        Explore<i class="fa-solid fa-arrow-right ml-2 font-light"></i>
      </h1>
      <ul className="after:content-[''] after:block after:h-[1px] after:bg-gray-700 after:my-4">
        {menuItems3.map((item) => (
          <li
            key={item.id}
            className={`mt-2 border-0 px-4 py-2 flex flex-row justify-start items-center gap-4 rounded-2xl cursor-pointer hover:bg-gray-500 transition ${
              selected === item.label ? "bg-gray-400" : ""
            }`}
            onClick={() => handleMenuItemClick(item.label)}
          >
            <i className={`fa-solid ${item.icon}`}></i>
            <div>{item.label}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
