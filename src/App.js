import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import React from "react";
import Character from "./pages/character";
import Header from "./components/header/header";
import Films from "./pages/films";
import Planets from "./pages/planets";
import Species from "./pages/species";
import Starships from "./pages/starships";
import Vehicles from "./pages/vehicles";

function App() {
  return (
    <BrowserRouter>
        <div>
            <Header/>
        </div>
       <Routes>
           <Route exact path='/' element={<Main/>}/>
           <Route exact path='/character' element={<Character/>}/>
           <Route exact path='/films' element={<Films/>}/>
           <Route exact path='/planets' element={<Planets/>}/>
           <Route exact path='/species' element={<Species/>}/>
           <Route exact path='/starships' element={<Starships/>}/>
           <Route exact path='/vehicles' element={<Vehicles/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
