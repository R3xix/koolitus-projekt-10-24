
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/myPages/HomePage';
import SpotPage from './pages/myPages/SpotPage';
import FxTrades from './pages/myPages/FxTrades';
import CryptoPairDetail from './pages/myPages/CryptoPairDetail';
import MyStrategies from './pages/myPages/MyStrategies';
import AboutMe from './pages/myPages/AboutMe';
import AdminHome from './pages/admin/AdminHome';
import AddFxTrade from './pages/admin/AddFxTrade';
import AddSpotTrade from './pages/admin/AddSpotTrade';
import AddStrategy from './pages/admin/AddStrategy';
import EditFxTrade from './pages/admin/EditFxTrade';
import EditSpotTrade from './pages/admin/EditSpotTarde';
import MaintainSpotTrade from './pages/admin/MaintainSpotTrade';
import MaintainFxTrade from './pages/admin/MaintainFxTrade';

function App() {
  return (
    <div className="App">
      <NavigationBar/>

      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='spot-page' element={<SpotPage/>}></Route>
        <Route path='fx-trades' element={<FxTrades/>}></Route>
        <Route path='crypto-pair-det' element={<CryptoPairDetail/>}></Route>
        <Route path='my-strategies' element={<MyStrategies/>}></Route>
        <Route path='about-me' element={<AboutMe/>}></Route>

        <Route path='admin' element={<AdminHome/>}></Route>
        <Route path='admin/add-fxtrade' element={<AddFxTrade/>}></Route>
        <Route path='admin/add-spottrade' element={<AddSpotTrade/>}></Route>
        <Route path='admin/add-strategy' element={<AddStrategy/>}></Route>
        
        <Route path='admin/maintain-spot' element={<MaintainSpotTrade/>}></Route>
        <Route path='admin/maintain-fxtrade' element={<MaintainFxTrade/>}></Route>

        <Route path='admin/edit-fxtrade/:fxIndex' element={<EditFxTrade/>}></Route>
        <Route path='admin/edit-spottrade/:spotIndex' element={<EditSpotTrade/>}></Route>


      </Routes>
     
    </div>
  );
}

export default App;
