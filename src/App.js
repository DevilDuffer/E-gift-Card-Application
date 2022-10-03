import './App.css';

// import EmployeeList from './Components/EmployeeList';
// import DeleteEmployee from './Components/DeleteEmployee';
import {Routes, Route} from 'react-router-dom';

import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Payment from "./Components/Payment";
import Dashboard from './Components/Dashboard';
import About from "./Components/About";
import GiftCard from './Components/GiftCard';
import AllGift from './Components/AllGift';


function App() {
  return (
    <div className="">
      {/* <div className="App"> */}
      {/* <ul > */}
      {/* <div className="Navbar"><h2>E-GiftCard Application</h2></div>
        <div className="Navbar"><Link to="/" style={{ textDecoration: 'none' }}><b className="Link">About</b></Link></div>
        <div className="Navbar"><Link to="/Signup" style={{ textDecoration: 'none' }}><b className="Link">Signup </b></Link></div>
        <div className="Navbar"><Link to="/Signin" style={{ textDecoration: 'none' }}><b className="Link">Signin </b></Link></div>
        <div className="Navbar"><Link to="/Payment" style={{ textDecoration: 'none' }}><b className="Link">Payment </b></Link></div>
        <div className="Navbar"><Link to="/GetAll" style={{ textDecoration: 'none' }}><b className="Link">GetAll </b></Link></div> 
        <Link to="/EmployeeList">  Employee List      4.</Link>
        <Link to="/DeleteEmployee">Delete Employee</Link>
        
      </ul> */}
      {/* </div> */}
      <div className="Route">
      <Routes>
      
      <Route index element={<Signin/>}></Route>
      <Route path ="/" element={<Dashboard/>}></Route>
      <Route path ="/Dashboard" element={<Dashboard/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="About" element={<About/>}></Route>
      <Route path="/Payment" element={<Payment/>}></Route>
      <Route path="GiftCard" element={<GiftCard/>}></Route>
      <Route path="/Signin" element={<Signin/>}></Route>
      <Route path="/AllGift" element={<AllGift/>}></Route>
      {/* <Route path="/getAll" element={<EmployeeList/>}></Route>
      <Route path="/DeleteEmployee" element={<DeleteEmployee/>}></Route> */}
      
      </Routes>
      </div>
    </div>
  );
}

export default App;
