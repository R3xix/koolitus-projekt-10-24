
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/myPages/HomePage';
import SpotPage from './pages/myPages/SpotPage';
import FxTrades from './pages/myPages/fxTrades';
import CryptoPairDetail from './pages/myPages/CryptoPairDetail';
import MyStrategies from './pages/myPages/myStrategies';
import AboutMe from './pages/myPages/AboutMe';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='spot-page' element={<SpotPage/>}></Route>
        <Route path='fx-trades' element={<FxTrades/>}></Route>
        <Route path='crypto-pair-det' element={<CryptoPairDetail/>}></Route>
        <Route path='my-strategies' element={<MyStrategies/>}></Route>
        <Route path='about-me' element={<AboutMe/>}></Route>


      </Routes>
     
    </div>
  );
}

export default App;
