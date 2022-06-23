 import Navbar  from "./components/Navbar/Navbar.js";
import Main from "./Main.js";
import Footer from "./components/Footer/Footer.js";
import {BrowserRouter} from "react-router-dom";

 
 function App ()  {
    return (
       <BrowserRouter> 
         <Navbar />
         <Main/>
         <Footer/>
       </BrowserRouter>
  
    );
}

export default App