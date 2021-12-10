import React, { useEffect, useState } from "react";
import { getAllCategories, getAllLinks } from "./utils";



export const SearchProvider = ({ children }) => {
  const [links, setLinks] = useState({})
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  const loadLinks = async () => {
    let links = await getAllLinks();
    let temp = {};

    links.forEach(({category, name, url})=>{
      if(temp[category]){
        temp[category].push({name, url, category})
      }else{
        temp[category] = [{name, url}]
      }
    })
    setLinks(temp)

    setLoading(false)
  };

  const loadCategories = async () => {
    setLoading(true)
    let categories = await getAllCategories();  
    setCategories(categories)

    loadLinks()
  };

  useEffect(() => {
    loadCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SearchContext.Provider value={{ links, categories: [...new Set(categories)], loading }}>
      {children}
    </SearchContext.Provider>
  );
};

export const SearchContext = React.createContext()
