import Nav from "./Nav";
import logo from "../assets/logo.jpg";



function Header(){
    return (
        <>
        <header>
            <img src={logo} alt="Little Lemon Logo" />
        </header>
        <Nav />
        </>
    )
}


export default Header;