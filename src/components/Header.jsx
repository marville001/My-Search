import React, { useContext, useState } from "react";
import {
  Menu,
  Search,
  Sun,
  Moon,
  Twitter,
  MessageSquare,
  X,
} from "react-feather";
import { ThemeContext } from "../theme.context";

const Header = ({ toggleOpen, inputRef }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("Search here");


  const handleSearch = e=>{
    e.preventDefault();
    alert(searchText)
  }

  return (
    <div className="max-w-7xl m-auto py-3 sm:px-4">
      {/* Header Top */}
      <div className="flex items-center justify-between">
        {!menuOpen ? (
          <Menu
            strokeWidth={3}
            onClick={() => setMenuOpen(true)}
            size={30}
            className="text-gray-100 md:hidden block mr-2 cursor-pointer"
          />
        ) : (
          <X
            strokeWidth={3}
            onClick={() => setMenuOpen(false)}
            size={30}
            className="text-gray-100 md:hidden block mr-2 cursor-pointer"
          />
        )}
        <h1 className="text-black dark:text-white font-bold text-4xl">
          Search Master
        </h1>
        <Search
          onClick={() => setSearchOpen(true)}
          strokeWidth={3}
          size={30}
          className="text-gray-100 md:hidden block cursor-pointer"
        />
      </div>

      {/* Header bottom large */}
      <div className="justify-between mt-7 hidden md:flex">
        <form onSubmit={handleSearch} className="flex-1">
          <input
            type="search"
            onFocus={(e)=>{
              toggleOpen(true);
              if(searchText === "Search here") setSearchText("")
            }}
            ref={inputRef}
            value={searchText}
            onChange={e=>setSearchText(e.target.value)}
            placeholder="search here..."
            className="bg-white dark:bg-gray-400 border-2 px-2 py-1 border-blue-400 rounded-md min-w-full outline-none text-gray-900"
          />
        </form>
        <div className="flex-1 flex justify-center">
          <div
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 cursor-pointer bg-gray-400 rounded-full flex justify-center items-center hover:bg-indigo-300 hover:text-gray-800"
          >
            {theme !== "dark" ? (
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

      {/* Search small */}
      {searchOpen && (
        <div className="z-10 bg-white md:hidden dark:bg-gray-900 sm:p-2 absolute top-0 bottom-0 left-0 right-0">
          <div className="flex items-center py-2">
            <Search
              strokeWidth={2}
              className="text-gray-800 dark:text-gray-200"
            />
            <div className="flex-1">
              <input
                type="text"
                placeholder="search"
                className="bg-transparent px-2 py-1 border-0 rounded-md min-w-full outline-none text-xl text-gray-900 dark:text-gray-200"
              />
            </div>
            <X
              onClick={() => setSearchOpen(false)}
              strokeWidth={3}
              size={30}
              className="text-gray-800 cursor-pointer dark:text-gray-200"
            />
          </div>
        </div>
      )}

      {/* Menu Small */}
      {menuOpen && (
        <div className="bg-white dark:bg-gray-900 md:hidden absolute top-16 bottom-0 left-0 right-0">
          <div className="flex-1 sm:p-4 flex items-center">
            <div
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 cursor-pointer bg-gray-400 rounded-full flex justify-center items-center hover:bg-indigo-300 hover:text-gray-800"
            >
              {theme === "dark" ? (
                <Moon
                  strokeWidth={3}
                  className="text-white bg-dark inline-block"
                  size={20}
                />
              ) : (
                <Sun
                  strokeWidth={3}
                  className="text-white bg-dark block"
                  size={25}
                />
              )}
            </div>

            <div className="ml-2 w-9 h-9 cursor-pointer bg-gray-400 rounded-full flex justify-center items-center hover:bg-indigo-300 hover:text-gray-800">
              <Twitter
                strokeWidth={3}
                className="text-white bg-dark block"
                size={25}
              />
            </div>

            <div className="ml-2 w-9 h-9 cursor-pointer bg-gray-400 rounded-full flex justify-center items-center hover:bg-indigo-300 hover:text-gray-800">
              <MessageSquare
                strokeWidth={3}
                className="text-white bg-dark block"
                size={25}
              />
            </div>
          </div>
          <div className="sm:p-4 grid grid-cols-2 gap-y-3">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div className="text-gray-800 dark:text-gray-200 flex items-center ">
                <Search
                  size={20}
                  className="text-gray-800 dark:text-gray-200 mr-2"
                />
                Category Name 1
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
