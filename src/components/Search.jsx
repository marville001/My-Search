import React from "react";

const PopularItem = ({ text }) => {
  return (
    <a className="font-bold text-2xl text-gray-700 dark:text-white" href="#gdgdgd" id="">
      {text}
    </a>
  );
};

const Search = ({ searchRef, open }) => {
  return (
    <div ref={searchRef}>
      {open && (
        <div className="max-w-7xl m-auto py-3 sm:mx-4 rounded-md absolute top-35 right-1 left-1 xl:left-28 bg-gray-100 dark:bg-gray-800">
          {/* No search yet */}
          <div className="mt-2 pb-5">
            <hr className="dark:border-gray-700" />
            <h2 className="text-center text-2xl font-bold my-2 dark:text-white">
              Check popular searches
            </h2>
            <hr className="dark:border-gray-700" />

            <div className="flex justify-around mt-12">
              <PopularItem text="#bridges" />
              <PopularItem text="#region" />
            </div>

            <div className="flex justify-around mt-8">
              <PopularItem text="#web hosting" />
              <PopularItem text="#all places in" />
            </div>

            <div className="flex justify-around mt-8">
              <PopularItem text="#countries" />
              <PopularItem text="#places" />
            </div>

            <div className="flex justify-around mt-8">
              <PopularItem text="#wild animals" />
              <PopularItem text="#animation movies" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
