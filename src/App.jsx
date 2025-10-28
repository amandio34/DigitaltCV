import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from './pages/Home';
import About from './pages/Projects';
import Contact from './pages/Contact';
import { toggleTheme } from './redux/store';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const buttonText = theme === 'light' ? 'Tema: Dag' : 'Tema: Natt';

  return (
    <main className="app">
      <nav className="nav">
        <ul>
          <li><Link to="/">Om mig</Link></li>
          <li><Link to="/projects">Projekt</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>

      <button className="theme-button" onClick={handleToggleTheme}>
        {buttonText}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default App;
