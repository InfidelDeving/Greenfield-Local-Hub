import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home/Home"

export default function Routing(){

    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/shop" element={<Shop/>}/> */}
            {/* <Route path="/item" element={<Item/>}/> */}
            {/* <Route path="/producers" element={<Producers/>}/> */}
            {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
        </>
    )
}
