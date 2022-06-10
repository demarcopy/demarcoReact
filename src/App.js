 import FooterPrincipal from "./components/Footer/Footer.js";
 import Navbar  from "./components/Navbar/Navbar.js";
 import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

 
 function App ()  {
    return (
     <>
        <Navbar />
        <ItemListContainer greeting="Bienvenido!"   />
     </>
    );
}

export default App