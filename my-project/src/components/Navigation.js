import React from "react";
import { NavLink } from "react-router-dom";
import {
  RiHome2Fill,
  RiAlbumFill,
  RiUser2Fill,
  RiMusicFill
} from "react-icons/ri";
const Navigation = () => {
  const Menus = [
    { title: "Home", link: "/", Icon: <RiHome2Fill className="h-5 w-5 " /> },
    {
      title: "Albums",
      link: "/albums",
      Icon: <RiAlbumFill className="h-5 w-5" />
    },
    {
      title: "Artists",
      link: "/artists",
      Icon: <RiUser2Fill className="h-5 w-5 " />
    },
    {
      title: "Songs",
      link: "/songs",
      Icon: <RiMusicFill className="h-5 w-5 " />
    }
  ];
  return (
    <div className="md:hidden bg-white max-h-14 w-screen pb-2 rounded-t-xl border-t border-solid shadow-lg shadow-black fixed bottom-0 bg-white">
      <ul className="flex relative justify-evenly">
        {Menus.map((Menu, i) => (
          <li key={i}>
            <NavLink to={Menu.link}>
              {({ isActive }) => (
                <div className={`flex flex-col text-center pt-6`}>
                  <span
                    className={`z-50 mx-auto text-xl cursor-pointer duration-500 ${
                      isActive && "-mt-3 text-blue-400"
                    }`}
                  >
                    {Menu.Icon}
                  </span>
                  <span
                    className={` ${
                      isActive ? "block mx-auto text-blue-400" : "hidden"
                    } `}
                  >
                    {Menu.title}
                  </span>
                </div>
              )}
            </NavLink>
          </li>
          // <li key={i} className="w-16">
          //   <NavLink className="flex flex-col text-center pt-6" to={Menus.link}>
          //     <span
          //       className={`z-50 mx-auto text-xl cursor-pointer duration-500 ${
          //         i === active && "-mt-3 text-blue-400"
          //       }`}
          //     >
          //       {menu.Icon}
          //     </span>
          //     <span
          //       className={` ${
          //         active === i ? "block mx-auto text-blue-400" : "hidden"
          //       } `}
          //     >
          //       {menu.title}
          //     </span>
          //   </NavLink>
          // </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
