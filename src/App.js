 import Navbar  from "./components/Navbar/Navbar.js";
import Main from "./Main.js";
import Footer from "./components/Footer/Footer.js";
import {BrowserRouter} from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'
import {CartContext} from "./components/Contexto/cartContext.js";

 
 function App ()  {
    return (
       <BrowserRouter> 
         <CartContext>
            <Navbar />
            <Main/>
         </CartContext>
         <Footer/>
       </BrowserRouter>
  
    );
}

export default App