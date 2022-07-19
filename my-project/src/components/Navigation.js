import React, { useState } from 'react';
import { MdLibraryMusic } from 'react-icons/md';
import { IoMdAlbums } from 'react-icons/io';
import { RiAlbumFill, RiUser2Fill, RiMusicFill } from 'react-icons/ri';

const Navigation = () => {
  const Menus = [
    {
      name: 'Home',
      Icon: <RiAlbumFill className="h-5 w-5" />,
      dis: 'translate-x-0',
    },
    {
      name: 'Profile',
      Icon: <RiUser2Fill className="h-5 w-5 " />,
      dis: 'translate-x-16',
    },
    {
      name: 'Message',
      Icon: <RiMusicFill className="h-5 w-5 " />,
      dis: 'translate-x-32',
    },
    {
      name: 'Photos',
      Icon: <IoMdAlbums className="h-5 w-5 " />,
      dis: 'translate-x-48',
    },
    {
      name: 'Settings',
      Icon: <MdLibraryMusic className="h-5 w-5" />,
      dis: 'translate-x-64',
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="md:hidden bg-white max-h-14 w-screen px-6 rounded-t-xl border-t border-solid shadow-lg shadow-black fixed bottom-0 bg-white">
      <ul className="flex relative justify-evenly">
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <a
              className="flex flex-col text-center pt-6"
              onClick={() => setActive(i)}
            >
              <span
                className={`z-50 mx-auto text-xl cursor-pointer duration-500 ${
                  i === active && '-mt-3 text-blue-400'
                }`}
              >
                {menu.Icon}
              </span>
              <span
                className={` ${
                  active === i ? 'block mx-auto text-blue-400' : 'hidden'
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
