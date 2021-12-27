import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
