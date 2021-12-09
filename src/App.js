import { useEffect, useRef, useState } from "react";
import "./App.css";
import CardsList from "./components/CardsList";
import Header from "./components/Header";
import Search from "./components/Search";
import { getAllLinks } from "./utils";

function App() {
  const inputRef = useRef();
  const searchRef = useRef();
  useEffect(() => {
    const loadLinks = async () => {
      let links = await getAllLinks();
      console.log({ links });
    };
    loadLinks();
  }, []);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const clickListener = (e) => {
      console.log(searchRef.current.contains(e.target));
      if (e.target !== inputRef.current && (searchRef.current && !searchRef.current.contains(e.target))) {
        setSearchOpen(false)
      }
    };
    document.addEventListener("click", clickListener);
    return () => document.removeEventListener("click", clickListener);
  }, []);


  return (
    <div className="h-full bg-transparent dark:bg-gray-900 bg-fixed transition-all">
      <Header inputRef={inputRef} toggleOpen={setSearchOpen} />
      <Search searchRef={searchRef} open={searchOpen} />
      <CardsList />
    </div>
  );
}

export default App;
