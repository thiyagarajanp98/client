import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FcMusic } from "react-icons/fc";
import { MdOutlineKeyboardArrowLeft, MdLibraryMusic } from "react-icons/md";
import { IoMdAlbums } from "react-icons/io";
import {
  RiHome2Fill,
  RiAlbumFill,
  RiUser2Fill,
  RiMusicFill
} from "react-icons/ri";
// import { GoogleLogin, GoogleLogout } from "react-google-login";

// const clientId =
//   "876133612705-5lqe7ccsc3mpo1keg4c8nkhq9vt627nc.apps.googleusercontent.com";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
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
  const Menu = [
    {
      title: "Recently Played",
      link: "/songs",
      gap: true,
      Icon: <IoMdAlbums className="h-5 w-5 " />
    },
    {
      title: "Library",
      link: "/songs",
      Icon: <MdLibraryMusic className="h-5 w-5" />
    }
  ];
  return (
    <div className="flex">
      <div
        className={`hidden md:flex flex-col h-screen sticky top-0
      p-5 pt-8 border shadow-lg ${
        open ? "w-60" : "w-20"
      } duration-300 relative`}
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
              <NavLink
                className={`text-sm cursor-pointer group rounded-md `}
                to={Menu.link}
              >
                {({ isActive }) => (
                  <div className="flex flex-col ">
                    <div className={`flex item-center gap-x-4 p-2`}>
                      <span
                        className={` ${
                          isActive ? "text-blue-400" : "text-gray-400"
                        } group-hover:text-blue-400 group-hover:animate-heartBeat  origin-left duration-200`}
                      >
                        {Menu.Icon}
                      </span>
                      <span
                        className={`${isActive ? "text-blue-400" : undefined} ${
                          !open && "hidden"
                        }
                         font-semibold text-dark-purple group-hover:text-blue-400 group-hover:animate-heartBeat  origin-left duration-200`}
                      >
                        {Menu.title}
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </li>
          ))}
          <div
            className={`pl-3 my-4 text-[16px] whitespace-nowrap ${
              open ? "visible" : "invisible"
            }`}
          >
            MY MUSIC
          </div>
          {Menu.map((data, index) => (
            <li key={index}>
              <NavLink
                className={`text-sm cursor-pointer group rounded-md`}
                to={data.link}
              >
                {({ isActive }) => (
                  <div className="flex flex-col ">
                    <div className={`flex item-center gap-x-4 p-2 `}>
                      <span
                        className={` ${
                          isActive ? "text-blue-400" : "text-gray-400"
                        } group-hover:text-blue-400 group-hover:animate-heartBeat  origin-left duration-200`}
                      >
                        {data.Icon}
                      </span>
                      <span
                        className={`${isActive ? "text-blue-400" : undefined} ${
                          !open && "hidden"
                        } origin-left duration-200 whitespace-nowrap font-semibold text-dark-purple group-hover:text-blue-400 group-hover:animate-heartBeat  origin-left duration-200`}
                      >
                        {data.title}
                      </span>
                    </div>
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* <div className="flex mt-auto justify-center ">
          {showloginButton ? (
            <GoogleLogin
              clientId={clientId}
              render={(renderProps) => (
                <button
                  className="rounded-lg px-4 py-2 bg-green-300 hover:bg-green-400 duration-300"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Sign In
                </button>
              )}
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          ) : null}

          {showlogoutButton ? (
            <GoogleLogout
              clientId={clientId}
              render={(renderProps) => (
                <div className="mb-3">
                  <img
                    className={`w-14 mb-2 mx-auto rounded-full border border-gray-100 shadow-sm ${
                      open ? "h-14" : "h-10"
                    }`}
                    src={url}
                    alt="user"
                  />
                  <span
                    className={`font-medium text-dark-purple whitespace-nowrap ${
                      open ? "block" : "hidden"
                    }`}
                  >
                    {name}
                  </span>
                  <button
                    className="rounded-lg px-4 py-2 bg-green-300 hover:bg-green-400 duration-300"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    sign out
                  </button>
                </div>
              )}
              onLogoutSuccess={onSignoutSuccess}
            ></GoogleLogout>
          ) : null}
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
