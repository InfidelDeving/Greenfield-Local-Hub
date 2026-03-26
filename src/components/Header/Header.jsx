import { NavLink } from "react-router"
import logo from "../../assets/Logo.svg"
import "./Header.css"
export default function Header(){
 
    return(
        <>
        <header className="header">
            <div className="bar">
                <NavLink to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </NavLink>
                <nav className="buttons">
                    <NavLink to="/shop">
                        <button className="nav-btn">
                            Shop
                        </button>
                    </NavLink>
                    <NavLink to="/producers">
                        <button className="nav-btn">
                            Producers
                        </button>
                    </NavLink>
                    <NavLink to="/login">
                        <button>
                            Login
                        </button>
                    </NavLink>
                </nav>
            </div>
            
            <div className="divider"></div>
        </header>
        </>
    )
}