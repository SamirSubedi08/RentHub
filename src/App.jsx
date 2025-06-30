import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import RentRoom from './pages/RentRoom';
import RentHotel from './pages/RentHotel';
import StayHome from './pages/StayHome';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './index.css';
import style from './App.module.css';
import Language from './pages/Language';
import Settings from './pages/Settings';
 // Don't forget to import this

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className={style.grid_container}>
      <Sidebar/>
      <div className={style.horizontal_line}><hr /></div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/rent-room" element={<RentRoom />} />
        <Route path="/book-hotel" element={<RentHotel />} />
        <Route path="/stay-home" element={<StayHome />} />
        <Route path="/language" element={<Language/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
      
      
      
      
    </div>
 


    </BrowserRouter>
  );
}

export default App;
