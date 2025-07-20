import Nav from "./Nav";
import logo from "../assets/logo.jpg";
import "./Header.css";
import { Link } from "react-router-dom";


function Header(){
    return (
        <div className="header">
        <header>
            <Link to="/">
            <img src={logo} alt="Little Lemon Logo" />
            </Link>
        </header>
        <Nav />
        </div>
    )
}


export default Header;