import Nav from "./Nav";
import logo from "../assets/logo.jpg";
import "./Header.css";


function Header(){
    return (
        <div className="header">
        <header>
            <img src={logo} alt="Little Lemon Logo" />
        </header>
        <Nav />
        </div>
    )
}


export default Header;