import { Outlet } from "react-router";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>

  );
}

export default Dashboard;