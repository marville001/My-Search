import React, { useContext } from "react";
import CardsList from "../components/CardsList";
import { SearchContext } from "../search.context";

const Home = () => {
  const { loading } = useContext(SearchContext);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center text-xl text-gray-900 dark:text-gray-100 font-bold">
          Loading...
        </div>
      ) : (
        <>
          <CardsList />
        </>
      )}
    </div>
  );
};

export default Home;
