import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";




const App = () => {
  return ( 
      <BrowserRouter>
       <NavBar />
         <Routes>
           <Route path="/" element={<ItemListContainer />}/>
           <Route path="/category/:categorySelect" element={<ItemListContainer/>}/>
           <Route path="/item/:id" element={<ItemDetailContainer />}/>
           <Route path="/cart" element={<Cart/>}/>
         </Routes>  
     </BrowserRouter>
   
  );
};

export default App;
