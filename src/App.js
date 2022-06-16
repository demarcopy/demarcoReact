 import Navbar  from "./components/Navbar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.js";
import Footer from "./components/Footer/Footer.js";

 
 function App ()  {
    return (
     <>
        <Navbar />
        <ItemListContainer greeting="Bienvenido!"   />
        <ItemDetailContainer />
        <Footer/>
     </>
    );
}

export default App