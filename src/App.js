import './App.css';
import Header from './components/Header';
import SingleLink from './components/SingleLink';
import ToggleTheme from './components/ToggleTheme';

function App() {
  return (
    <div className="h-screen bg-transparent dark:bg-gray-900 transition-all">
      <Header />
      <ToggleTheme />
      <SingleLink link="https://www.github.com" name="Github"/>
      <SingleLink link="https://www.google.com" name="Google"/>
      <h4>App</h4>
    </div>
  );
}

export default App;
