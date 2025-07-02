import { useEffect, useState } from "react";
import {Link} from "react-router";

const Header = () => {

    console.log("Header Render")

    const [btnNameReact, setbtnNameReact]  = useState("Login");

    useEffect(() => {
        console.log("useEffect Called.")
    }, [])

    //let btnName = "Login";
    return (
        <div className="header">
            <div className="logo-container">
                <img  className="logo"  img="/Assets/BiharEssence.jpeg" alt="Logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li> <Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart"> Cart</Link></li>
                    <li className="login-logout" onClick={() =>{
                        setbtnNameReact(btnNameReact => (btnNameReact =="Login" ? "Logout": "Login"))
                       // btnNameReact ==="Login" ?  setbtnNameReact("Logout") : setbtnNameReact("Login");
                    }}>{btnNameReact}</li>
                </ul>
            </div>

        </div>
    )
};
export default Header;  // standard practice