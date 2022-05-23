import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './app.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
    <Router>
    <Topbar/>
    <div className="container">
      <Sidebar/> 
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/Users" element={<UserList/>}></Route>
        <Route path="/User/:userId" element={<User/>}></Route>
        <Route path="/newUser" element={<NewUser />}></Route>
        
        {/* <Route path="/products" element={<ProductList />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="/newproduct" element={<NewProduct />}></Route> */}
     </Routes>
     </div>
  </Router>
  );
}
export default App;
