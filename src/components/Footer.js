
import logo from "../assets/logo.jpg";
import "./Footer.css";

function Footer() {

    return (
        <footer className="footer">
            <div>
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <nav className="footer-nav">
                <section >
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="./About">About</a></li>
                        <li><a href="./Menu">Menu</a></li>
                        <li><a href="./Reservations">Reservations</a></li>
                        <li><a href="OrderOnline">Order Online</a></li>
                        <li><a href="Login">Login</a></li>
                    </ul>
                </section>
                <section>
                    <h4>Contact</h4>
                    <address>
                        <ul>
                            <li>Address</li>
                            <li>Phone:</li>
                            <li>Email:</li>
                        </ul>
                    </address>
                </section>
                <section>
                    <h4>Social Media Links</h4>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Instagram</a></li>
                    </ul>
                </section>
            </nav>
        </footer>
    )
}


export default Footer;
