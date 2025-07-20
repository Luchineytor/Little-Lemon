
import hero from "../assets/hero.jpg";
import "./Main.css";
import { Link } from 'react-router-dom';
import Specials from "./Specials";

function Main() {

    return (
        <main>
            <div className="hero">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Miami</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking">
                        <button>Reserve a Table</button>
                    </Link>
                </section>
                <section className="hero-image">
                    <img src={hero} alt="A server carrying a brusquetas"/>
                </section>
            </div>
            <Specials />
            <section className='testimonials'>
                <article className="testimonials-card">
                <h3>Rating</h3>
                <img src="https://picsum.photos/30/30" alt="…"/>
                <h4>Name</h4>
                <p>Lorem Ipsum</p>
                </article>
                <article className="testimonials-card">
                <h3>Rating</h3>
                <img src="https://picsum.photos/30/30" alt="…"/>
                <h4>Name</h4>
                <p>Lorem Ipsum</p>
                </article>
                <article className="testimonials-card">
                <h3>Rating</h3>
                <img src="https://picsum.photos/30/30" alt="…"/>
                <h4>Name</h4>
                <p>Lorem Ipsum</p>
                </article>
            </section>
            <div className="about">
                <section className='about-text'>
                    <h1>Little Lemon</h1>
                    <h2>Miami</h2>
                    <p>Lorem ipsum dolor Lorem ipsum dolor
                        Lorem ipsum dolor Lorem ipsum dolor
                        Lorem ipsum dolor Lorem ipsum dolor
                        Lorem ipsum dolor Lorem ipsum dolor 
                        Lorem ipsum dolor Lorem ipsum dolor 
                        Lorem ipsum dolor Lorem ipsum dolor</p>
                </section>
                <section className='about-image'>
                    <img src="https://picsum.photos/737/900" alt="About Us"/>
                    <img src="https://picsum.photos/737/960" alt="About Us"/>
                </section>
            </div>

        </main>
    )
}


export default Main;