import React, { useContext } from "react";
import { Menu, Search, Sun, Moon, Twitter, MessageSquare } from "react-feather";
import { ThemeContext } from "../theme.context";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="max-w-5xl m-auto py-3 sm:px-4">
      <div className="flex items-center justify-between">
        <Menu strokeWidth={3} size={30} className="text-gray-900 dark:text-gray-100 md:hidden block mr-2" />
        <h1 className="text-black dark:text-white font-bold text-4xl">
          Search Master
        </h1>
        <Search strokeWidth={3} size={30} className="text-gray-900 dark:text-gray-100 md:hidden block" />
      </div>
      <div className="flex justify-between mt-7">
        <div className="flex-1">
          <input
            type="text"
            placeholder="search"
            className="bg-white dark:bg-gray-400 border-2 px-2 py-1 border-blue-400 rounded-md min-w-full outline-none text-gray-900"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 cursor-pointer bg-gray-400 rounded-full flex justify-center items-center hover:bg-indigo-300 hover:text-gray-800"
          >
            {theme === "dark" ? (
              <Moon
                strokeWidth={3}
                className="text-white bg-dark inline-block"
                size={25}
              />
            ) : (
              <Sun
                strokeWidth={3}
                className="text-white bg-dark block"
                size={25}
              />
            )}
          </div>

          <div className="ml-2 w-10 h-10 cursor-pointer bg-gray-400 rounded-full flex justify-center items-center hover:bg-indigo-300 hover:text-gray-800">
            <Twitter
              strokeWidth={3}
              className="text-white bg-dark block"
              size={25}
            />
          </div>

          <div className="ml-2 w-10 h-10 cursor-pointer bg-gray-400 rounded-full flex justify-center items-center hover:bg-indigo-300 hover:text-gray-800">
            <MessageSquare
              strokeWidth={3}
              className="text-white bg-dark block"
              size={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
