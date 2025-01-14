import './App.css'
import {Header} from "./components/Header.jsx";
import {Home} from "../pages/Home.jsx";
import {Routes, Route} from 'react-router-dom'
import {useGarmentProvder} from "../context/GarmentProvider.jsx";
import {Checkout} from "../pages/Checkout.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {ProductPage} from "../pages/ProductPage.jsx";

function App() {

    const {overlay, toggleOverlay, toggleSidebar} = useGarmentProvder();

    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path='/product' element={<ProductPage/>}/>
                </Routes>
            </main>
            <div onClick={() => {toggleOverlay(); toggleSidebar();}} className={`overlay ${overlay ? 'active' : ''}`}></div>
        </div>
    )
}

export default App
