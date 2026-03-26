import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home/Home"
import Producers from "./pages/Producers/Producers"
import ProducerDetails from "./pages/ProducerDetails/ProducerDetails"
import Shop from "./pages/Shop/Shop"

export default function Routing(){

    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            {/* <Route path="/item" element={<Item/>}/> */}
            <Route path="/producers" element={<Producers/>}/>
            <Route path="/producer/:producer" element={<ProducerDetails />} />

            {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
        </>
    )
}
