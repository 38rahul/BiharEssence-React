import { useState } from "react";

const Header = () => {

    console.log("Header Render")

    const [btnNameReact, setbtnNameReact]  = useState("Login");

    //let btnName = "Login";
    return (
        <div className="header">
            <div className="logo-container">
                <img  className="logo"  img="/Assets/BiharEssence.jpeg" alt="Logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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