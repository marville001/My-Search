import React from "react";
import { Search } from "react-feather";
import { Link } from "react-router-dom";
const Card = ({ item, category }) => {
  return (
    <div className="bg-gray-100 rounded-xl dark:bg-gray-700 py-5 sm:w-100 md:w-80 lg:w-60 flex-grow">
      <h4 className="dark:text-gray-200 text-center text-2xl font-bold flex items-center justify-center pb-2">
        <img width={30} height={30} src={category.icon} alt="" className="mr-2" />{category.name}
      </h4>
      <hr className="bg-gray-300  border-gray-300 border-2 rounded-sm dark:border-gray-500 dark:bg-gray-500" />
      <div className="list max-h-64 overflow-auto pt-2">
          <p className="px-6 mb-2 text-center text-sm text-gray-400">{category.description.substr(0, 80)} ...</p>
        {item?.map((site, i) => (
          <div className="group flex px-6 hover:bg-gray-300 justify-between items-center">
            <a target="_blank" rel="noreferrer" href={site.url} className="dark:text-gray-200 group-hover:text-yellow-700 flex items-center">
              <span className="text-xs text-gray-500 pr-2">{i + 1}.</span> {site.name}
            </a>
            <Link to={`/details/${site.name}`}>
              <span className="bg-yellow-700">
                <Search
                  strokeWidth={3}
                  className="text-gray-100 dark:text-gray-700 group-hover:text-yellow-700  block"
                  size={20}
                />
              </span>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-4 px-6">
        <a
          href="#ggg"
          className="bg-blue-300 w-full py-1 text-center rounded-xl text-white"
        >
          See All {item?.length} Results
        </a>
      </div>
    </div>
  );
};

export default Card;
