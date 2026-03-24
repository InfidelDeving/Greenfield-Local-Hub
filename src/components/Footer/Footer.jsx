import "./Footer.css"
import { NavLink } from "react-router"

export default function Footer(){
    return(
        <>
            <footer className="footer">
                <NavLink to="/privacy">
                    <p className="footer-link">Privacy Policy</p>
                </NavLink>
                <NavLink to="/accessability">
                    <p className="footer-link">Accessability statement</p>
                </NavLink>
                <p className="footer-email">Contact Email: RealEmail@basedmail.com</p>
            </footer>
        </>
    )
}