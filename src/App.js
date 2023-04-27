import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Grid from './components/Grid';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Image from './pages/Image';
import Search from './pages/Search';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<Grid />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path="/Image/:id" element={<Image />} />
      </Routes>

    </div>
  );
}

export default App;
