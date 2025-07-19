
import hero from "../assets/hero.jpg";
import "./Main.css";

function Main() {

    return (
        <main>
            <div className="hero">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Miami</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </section>
                <section className="hero-image">
                    <img src={hero} alt="A server carrying a brusquetas"/>
                </section>
            </div>
            <div className="specials">
                <section className="specials-header">
                    <h2>This Week's Specials!</h2>
                    <button className="specials-button">Order Online</button>
                </section>
                <section className="specials-content">
                    <div className="special-card">
                        <div className="special-image">
                            <img src="https://picsum.photos/737/960" alt="Greek Salad"/>
                        </div>
                        <div className='special-head'>
                            <h4>Greek Salad</h4>
                            <p className="price">$12.99</p>
                        </div>
                        <div className="special-description">
                        <p>Bla bla bla lorem ipsum dolor
                            blabla bla lala uli lala la 
                            la vida es una yuca por favor
                            la vida, el lala de la quinta 
                            escencia es un destrozo
                            que trabajito estoy pasando 
                            en este curso por dios bla bla
                            lili lala </p>
                        </div>
                    </div>
                    <div className="special-card">
                        <div className="special-image">
                            <img src="https://picsum.photos/737/960" alt="Greek Salad"/>
                        </div>
                        <div className='special-head'>
                            <h4>Greek Salad</h4>
                            <p className="price">$12.99</p>
                        </div>
                        <div className="special-description">
                        <p>Bla bla bla lorem ipsum dolor
                            blabla bla lala uli lala la 
                            la vida es una yuca por favor
                            la vida, el lala de la quinta 
                            escencia es un destrozo
                            que trabajito estoy pasando 
                            en este curso por dios bla bla
                            lili lala</p>
                        </div>
                    </div>
                    <div className="special-card">
                        <div className="special-image">
                            <img src="https://picsum.photos/737/960" alt="Greek Salad"/>
                        </div>
                        <div className='special-head'>
                            <h4>Greek Salad</h4>
                            <p className="price">$12.99</p>
                        </div>
                        <div className="special-description">
                        <p>Bla bla bla lorem ipsum dolor
                            blabla bla lala uli lala la 
                            la vida es una yuca por favor
                            la vida, el lala de la quinta 
                            escencia es un destrozo
                            que trabajito estoy pasando 
                            en este curso por dios bla bla
                            lili lala</p>
                        </div>
                    </div>
                </section>
            </div>
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