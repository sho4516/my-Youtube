import React from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isSideMenuOpen);
  if (!isMenuOpen) return null;

  const menuItems1 = [
    { id: 1, icon: "fa-house", label: "Home" },
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

  return (
    <div className="w-[20%] h-[90vh] overflow-y-auto scrollbar-hide">
      <ul className="after:content-[''] after:block after:h-[1px] after:bg-gray-300 after:my-4">
        {menuItems1.map((item) => (
          <li
            key={item.id}
            className="mt-2 border-0 px-4 py-2 flex flex-row justify-start items-center gap-4 rounded-2xl cursor-pointer hover:bg-gray-500 transition"
          >
            <i className={`fa-solid ${item.icon}`}></i>
            <div>{item.label}</div>
          </li>
        ))}
      </ul>

      <ul className="after:content-[''] after:block after:h-[1px] after:bg-gray-300 after:my-4">
        {menuItems2.map((item) => (
          <li
            key={item.id}
            className="mt-2 border-0 px-4 py-2 flex flex-row justify-start items-center gap-4 rounded-2xl cursor-pointer hover:bg-gray-500 transition"
          >
            <i className={`fa-solid ${item.icon}`}></i>
            <div>{item.label}</div>
          </li>
        ))}
      </ul>

      <ul className="after:content-[''] after:block after:h-[1px] after:bg-gray-300 after:my-4">
        {menuItems2.map((item) => (
          <li
            key={item.id}
            className="mt-2 border-0 px-4 py-2 flex flex-row justify-start items-center gap-4 rounded-2xl cursor-pointer hover:bg-gray-500 transition"
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
