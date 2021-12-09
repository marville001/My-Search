import React, { useEffect, useState } from "react";
import { getAllLinks } from "./utils";



export const SearchProvider = ({ children }) => {
  const [links, setLinks] = useState({})
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const loadLinks = async () => {
      let links = await getAllLinks();

      let temp = {};

      links.forEach(({category, name, url})=>{
        if(temp[category]){
          temp[category].push({name, url})
        }else{
          temp[category] = [{name, url}]
        }
      })
      setLinks(temp)
      setCategories(Object.keys(temp))
    };
    loadLinks();
  }, []);
  
  console.log();

  return (
    <SearchContext.Provider value={{ links, categories: [...new Set(categories)] }}>
      {children}
    </SearchContext.Provider>
  );
};

export const SearchContext = React.createContext()
