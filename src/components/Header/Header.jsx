import { NavLink } from "react-router"

export default function Header(){

    return(
        <>
        text
        <header className="header">
            <div className="navbar">

            <nav className="buttons">
                <NavLink to="/shop">
                    <button >
                        Shop
                    </button>
                </NavLink>
                <NavLink to="/producers">
                
                </NavLink>
                <NavLink to="/login">
                
                </NavLink>
            </nav>
            </div>
            
            <div className="divider"></div>
        </header>
        </>
    )
}