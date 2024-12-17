
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/myPages/HomePage';
import SpotPage from './pages/myPages/SpotPage';
import FxTrades from './pages/myPages/FxTrades';
import CryptoPairDetail from './pages/myPages/CryptoPairDetail';
import MyStrategies from './pages/myStrategies/MyStrategies';
import AdminHome from './pages/admin/AdminHome';
import AddFxTrade from './pages/admin/AddFxTrade';
import AddSpotTrade from './pages/admin/AddSpotTrade';
import AddStrategy from './pages/admin/AddStrategy';
import EditFxTrade from './pages/admin/EditFxTrade';
import EditSpotTrade from './pages/admin/EditSpotTarde';
import MaintainSpotTrade from './pages/admin/MaintainSpotTrade';
import MaintainFxTrade from './pages/admin/MaintainFxTrade';
import BestLearningVideos from './pages/myPages/BestLerningVideos';

function App() {
  return (
    <div className="App">´
    
      <NavigationBar/>

      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='spot-page' element={<SpotPage/>}></Route>
        <Route path='fx-trades' element={<FxTrades/>}></Route>
        <Route path='crypto-pair-det' element={<CryptoPairDetail/>}></Route>
        <Route path='my-strategies' element={<MyStrategies/>}></Route>
        <Route path='best-learning-videos' element={<BestLearningVideos/>}></Route>

      

        <Route path='admin' element={<AdminHome/>}></Route>
        <Route path='admin/add-fxtrade' element={<AddFxTrade/>}></Route>
        <Route path='admin/add-spottrade' element={<AddSpotTrade/>}></Route>
        <Route path='admin/add-strategy' element={<AddStrategy/>}></Route>
        
        <Route path='admin/maintain-spot' element={<MaintainSpotTrade/>}></Route>
        <Route path='admin/maintain-fxtrade' element={<MaintainFxTrade/>}></Route>

        <Route path='admin/edit-fxtrade/:index' element={<EditFxTrade/>}></Route>
        <Route path='admin/edit-spottrade/:index' element={<EditSpotTrade/>}></Route>


      </Routes>
     
    </div>
  );
}

export default App;
