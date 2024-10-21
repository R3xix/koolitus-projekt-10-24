
import './App.css';
import { Link, Route, Routes } from "react-router-dom" ;
import HomePage from './pages/HomePage';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';

function App() {
  return (
    <div>

    
       
         
      
      <Routes>
        <Route path='/' element={ <HomePage/>}></Route>
        <Route path='work' element={ <Work/>}></Route>
        <Route path='hobbies' element={ <Hobbies/>}></Route>
        <Route path='courses' element={ <Courses/>}></Route>

      </Routes>


      
        
    </div>
  );
}

export default App;
