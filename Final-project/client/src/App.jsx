import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Employeecard from "./components/Employeecard";
import Statcard from "./components/Statcard";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = ()=>{


return <>
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/emp" element={<Employeecard/>}></Route>
  <Route path="/s" element={<Statcard/>}></Route>
</Routes>

<Footer/>

</BrowserRouter>


</>

}

export default App;
