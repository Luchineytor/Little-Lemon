
import hero from "../assets/hero.jpg";
import "./Main.css";

function Main() {

    return (
        <main>
            <div className="hero">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Miami</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </section>
                <section className="hero-image">
                    <img src={hero} alt="A server carrying a brusquetas"/>
                </section>
            </div>
        </main>
    )
}


export default Main;