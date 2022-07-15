import { useState } from "react";
import { Link } from "react-router-dom";
import { FcMusic } from "react-icons/fc";
import { MdOutlineKeyboardArrowLeft, MdLibraryMusic } from "react-icons/md";
import { IoMdAlbums } from "react-icons/io";
import {
  RiHome2Fill,
  RiAlbumFill,
  RiUser2Fill,
  RiMusicFill
} from "react-icons/ri";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", link: "/", Icon: <RiHome2Fill className="h-5 w-5 " /> },
    {
      title: "Albums",
      link: "/albums",
      Icon: <RiAlbumFill className="h-5 w-5 text-gray-400" />
    },
    {
      title: "Artists",
      link: "/artists",
      Icon: <RiUser2Fill className="h-5 w-5 text-gray-400" />
    },
    {
      title: "Songs",
      link: "/songs",
      Icon: <RiMusicFill className="h-5 w-5 text-gray-400" />
    },
    {
      title: "Recently Played",
      link: "/songs",
      gap: true,
      Icon: <IoMdAlbums className="h-5 w-5 text-gray-400" />
    },
    {
      title: "Library",
      link: "/songs",
      Icon: <MdLibraryMusic className="h-5 w-5 text-gray-400" />
    }
  ];
  return (
    <div className="flex">
      <div
        className={`h-screen 
      p-5 pt-8 desktop:${open ? "w-72" : "w-20"} duration-300 relative`}
      >
        <MdOutlineKeyboardArrowLeft
          className={`bg-white text-dark-purple p-1 h-6 w-6
             rounded-full absolute -right-3 top-11 border
             border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div className={` flex item-center gap-x-6 cursor-pointer rounded-md}`}>
          <span>
            <FcMusic
              className={`bg-amber-300 rounded cursor-pointer h-10 w-10`}
            />
          </span>
          <h1
            className={`text-dark-purple font-medium text-2xl pt-1 ${
              !open && "hidden"
            } origin-left duration-200 whitespace-nowrap`}
          >
            Music Air
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li key={index}>
              <Link
                className={`text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                  Menu.gap ? "mt-9" : "mt-2"
                }`}
                to={Menu.link}
              >
                <span>{Menu.Icon}</span>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 whitespace-nowrap text-dark-purple`}
                >
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
