import "./Login.css"
import { NavLink } from "react-router"


export default function Login(){

    return(
        <>
            <div className="page-cont">
                <div className="green-cont login-cont">
                    <h1 className="login-heading login-title-heading">Login</h1>
                    <div className="login-group-div">
                        <h2 className="login-heading">Email</h2>
                        <input className="input-field" type="email" placeholder="   Enter Email" id="login-input-email" />
                    </div>
                    <div className="login-group-div">
                        <h2 className="login-heading">Password</h2>
                        <input className="input-field" placeholder="   Enter Password" type="password" id="login-input-password" />
                    </div>
                    <p>Forgot Password?</p>
                    <button>Login</button>
                    <p>Don't have an account?<NavLink>Sign Up.</NavLink></p>
                </div>
            </div>
            
        </>
    )
}