import "./Specials.css";



function Specials({withBackground}) {

return (
    <div className={`$(specials) ${withBackground ? 'with-background' : ''}`}>
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
    )
}
export default Specials;