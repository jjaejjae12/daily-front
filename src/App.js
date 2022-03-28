import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routers/Main/Home";
import Join from "./routers/Join/Join";
import MissId from "./routers/MissId/MissId";
import { GlobalStyle } from "./GrobalStyle";


function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/:id" element={<Join />}></Route>
                <Route path="/MissId" element={<MissId />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;