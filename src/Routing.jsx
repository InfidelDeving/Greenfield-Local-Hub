import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home/Home"
import Producers from "./pages/Producers/Producers"
import ProducerDetails from "./pages/ProducerDetails/ProducerDetails"
import Shop from "./pages/Shop/Shop"
import ItemDetails from "./pages/ItemDetails/ItemDetails"
import Login from "./pages/Login/Login"

export default function Routing(){

    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/item/:item" element={<ItemDetails/>}/>
            <Route path="/producers" element={<Producers/>}/>
            <Route path="/producer/:producer" element={<ProducerDetails />} />
            <Route path="/login" element={<Login/>}/>

            {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
        </>
    )
}
