import React from 'react'

interface Card {
    title: string,
    price: string,
    textline1: string,
    textline2: string,
    textline3: string,
    buttonText: string
}

interface PriceProps {
    list: Card[]
}

export const Price: React.FC<PriceProps> = ({ list }) => {
    return (
        <section className="price">
            <div className="container">
                <div className="price__content">
                    <div className="price__text-block">
                        <p className="price__title title">Preise</p>
                        <p className="price__text">Die Preise für unseren <span className="price__text_blue">Schlüsseldienst Köln</span> sind niedriger als der empfohlene Mittelwert. Wir optimieren unsere Arbeit die ganze Zeit. Wir haben es geschafft, dass ein Durchschnittsmensch sich qualitativen Schlüsseldienst leisten kann. Der Schlüsseldienst ist etwas, worauf man nicht verzichten kann, wenn er gebraucht wird. So ist unser ganzes System darauf bestrebt, die Kosten für unseren Dienst günstig zu halten. </p>
                    </div>
                    <div className="price__cards-block">
                        {
                            list.map((card) => (
                                <div key={card.price} className="price__card">
                                    <p className="price__card-title">{card.title}</p>
                                    <p className="price__card-cost">{card.price}</p>
                                    <p className="price__card-text">{card.textline1}</p>
                                    <p className="price__card-text">{card.textline2}</p>
                                    <p className="price__card-text">{card.textline3}</p>
                                    <button className="price__card-button">{card.buttonText}</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}