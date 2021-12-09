import React from "react";
import { Search } from "react-feather";
const Card = ({ item }) => {
  return (
    <div className="bg-gray-100 rounded-xl dark:bg-gray-700 py-5 w-full sm:w-100 md:w-80 lg:w-60 flex-grow">
      <h4 className="dark:text-gray-200 text-center text-2xl font-bold">
        Card Title
      </h4>
      <hr className="bg-gray-300  border-gray-300 border-2 rounded-sm dark:border-gray-500 dark:bg-gray-500" />
      <div className="list max-h-64 overflow-auto pt-2">
          <p className="px-6 mb-2 text-center text-sm text-gray-400">Lorem ipsum dolor sit amet consecur adipisicing elit. Possimus optio, illum.</p>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4].map((item, i) => (
          <div className="group flex px-6 hover:bg-gray-300 justify-between items-center">
            <a target="_blank" href="somewhere.com" className="dark:text-gray-200 group-hover:text-yellow-700 flex items-center">
              <span className="text-xs text-gray-500">{i + 1}.</span> Somewhere {i}
            </a>
            <a target="_blank" href="somewhere2.com">
              <span className="bg-yellow-700">
                <Search
                  strokeWidth={3}
                  className="text-gray-100 dark:text-gray-700 group-hover:text-yellow-700  block"
                  size={20}
                />
              </span>
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-4 px-6">
        <a
          href="#ggg"
          className="bg-blue-300 w-full py-1 text-center rounded-xl text-white"
        >
          See All 12 Results
        </a>
      </div>
    </div>
  );
};

export default Card;
