import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Hom from './pages/Hom.js';
import Content from './pages/Content.js';
import Manager from './pages/Manager.js';
import ContentCreator from './pages/ContentCreator.js';
import Campaign from './pages/Campaign.js';
import Reception from './pages/Reception.js';
import Employee from './pages/Employee.js';
import HMR from './pages/HMR.js';
import Finance from './pages/Finance.js';
import "./App.css";
function App(){
  return (
    <div className="App">
    <BrowserRouter>
    <nav className="navbar">
    <Link className="nav"to='/'>Home</Link>
    <Link className="nav"to='/Content'>Content</Link>
    <Link className="nav"to='/Reception'>Reception</Link>
    <Link className="nav"to='/Manager'>Manager</Link>;
    <Link className="nav"to='/ContentCreator'>ContentCreator</Link>
    <Link className="nav"to='/Employee'>Employee</Link>
    <Link className="nav"to='/HMR'>HMR</Link>
    <Link className="nav"to='/Finance'>Finance</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Hom/>}></Route>
      <Route path='/Content' element={<Content/>}></Route>
      <Route path='/Campaign' element={<Campaign/>}></Route>
      <Route path='/Reception' element={<Reception/>}></Route>
      <Route path='/Manager' element={<Manager/>}></Route>
      {/* <Route path='/Admin' element={<Admin/>}></Route> */}
      <Route path='/ContentCreator' element={<ContentCreator/>}></Route>
      <Route path='/Employee' element={<Employee/>}></Route>
      <Route path='/HMR' element={<HMR/>}></Route>
      <Route path='/Finance' element={<Finance/>}></Route>
    

        
        
        </Routes>
        
        </BrowserRouter>
        </div>
  )
}
export default App

