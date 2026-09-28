import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Employeecard from "./components/Employeecard";
import Statcard from "./components/Statcard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Addemployee from "./components/Addemployee";

const App = ()=>{


return <>
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/emp" element={<Employeecard name="raj santra" email="raj@gmail.com" />}></Route>
  <Route path="/s" element={<Statcard/>}></Route>
  <Route path="/add" element={<Addemployee/>}></Route>
</Routes>

<Footer/>

</BrowserRouter>


</>

}

export default App;
