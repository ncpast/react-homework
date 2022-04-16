import Profile from './assets/profile/index.jsx'
import './App.css';   
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Profile />
      </header>
    </div>
    </BrowserRouter>
  );
};

export default App;