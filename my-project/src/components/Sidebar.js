import { useState } from 'react';
import { FcMusic } from 'react-icons/fc';
import { MdOutlineKeyboardArrowLeft, MdLibraryMusic } from 'react-icons/md';
import { IoMdAlbums } from 'react-icons/io';
import {
  RiHome2Fill,
  RiAlbumFill,
  RiUser2Fill,
  RiMusicFill,
} from 'react-icons/ri';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Home', Icon: <RiHome2Fill className="h-5 w-5 " /> },
    { title: 'Albums', Icon: <RiAlbumFill className="h-5 w-5" /> },
    { title: 'Artists', Icon: <RiUser2Fill className="h-5 w-5" /> },
    { title: 'Songs', Icon: <RiMusicFill className="h-5 w-5" />, gap: true },
    { title: 'Recently Played', Icon: <IoMdAlbums className="h-5 w-5" /> },
    { title: 'Library', Icon: <MdLibraryMusic className="h-5 w-5" /> },
  ];
  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen 
      p-5 pt-8 desktop:${open ? 'w-72' : 'w-20'} duration-300 relative`}
      >
        <MdOutlineKeyboardArrowLeft
          className={`bg-white text-dark-purple p-1 h-6 w-6
             rounded-full absolute -right-3 top-11 border
             border-dark-purple cursor-pointer ${!open && 'rotate-180'}`}
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
            className={`text-white font-medium text-2xl pt-1 ${
              !open && 'hidden'
            } origin-left duration-200 whitespace-nowrap`}
          >
            Music Air
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`text-gray-300 text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                Menu.gap ? 'mt-9' : 'mt-2'
              }`}
            >
              <span>{Menu.Icon}</span>
              <span
                className={`${
                  !open && 'hidden'
                } origin-left duration-200 whitespace-nowrap`}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-8 w-screen">
        <h1 className="text-2xl text-center font-semibold">Home page</h1>
      </div>
    </div>
  );
};

export default Sidebar;
