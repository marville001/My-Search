import {  useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import AllSites from "./pages/AllSites";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  const inputRef = useRef();
  const searchRef = useRef();

  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const clickListener = (e) => {
      if (
        e.target !== inputRef.current &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("click", clickListener);
    return () => document.removeEventListener("click", clickListener);
  }, []);

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="h-full bg-transparent dark:bg-gray-900 bg-fixed transition-all"
    >
      <Header inputRef={inputRef} toggleOpen={setSearchOpen} />
      <Search searchRef={searchRef} open={searchOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:link" element={<Details />} />
        <Route path="/sites/:category" element={<AllSites />} />
      </Routes>
    </div>
  );
}

export default App;
