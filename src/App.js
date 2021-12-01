import { useEffect } from "react";
import "./App.css";
import CardsList from "./components/CardsList";
import Header from "./components/Header";
import { getAllLinks } from "./utils";

function App() {
  useEffect(() => {
    const loadLinks = async () => {
      let links =  await getAllLinks();
      console.log({links});
    };
    loadLinks();
  }, []);
  return (
    <div className="h-screen bg-transparent dark:bg-gray-900 transition-all">
      <Header />
      <CardsList />
    </div>
  );
}

export default App;
