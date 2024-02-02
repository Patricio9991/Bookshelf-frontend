import { Routes,Route } from "react-router-dom";
import React from "react";
import Home from './pages/home'
import ShowBookDetails from "./pages/showBookDetails";
import NewBook from './pages/NewBook'
import EditBook from './pages/EditBook'
import DeleteBook from "./pages/DeleteBook";

export default function App(){
  return(
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book/details/:id' element={<ShowBookDetails/>}/>
        <Route path="/book/create" element={<NewBook/>}/>
        <Route path="/book/edit/:id" element={<EditBook/>}/> 
        <Route path="/book/delete/:id" element={<DeleteBook/>}/>
      </Routes>
  )
}
