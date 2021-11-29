import './App.css';
import Header from './components/Header';
import ToggleTheme from './components/ToggleTheme';

function App() {
  return (
    <div className="bg-transparent dark:bg-black transition-all">
      <Header />
      <ToggleTheme />
      <h4>App</h4>
    </div>
  );
}

export default App;
