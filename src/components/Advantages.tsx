import React from 'react'

import manImg from '../assets/images/advantages-man.png'

interface Item {
    id: string,
    title: string,
    text: string
}

interface AdvantagesProps {
    list: Item[]
}

export const Advantages: React.FC<AdvantagesProps> = ({ list }) => {

    const advantagesLeftBlock = list?.filter(item => item.id < '4')
    const advantagesRightBlock = list?.filter(item => item.id > '3')

    return (
        <section className="advantages">
            <div className="container">
                <div className="advantages__content">
                    <div className="advantages__title title">Unsere Vorteile</div>
                    <div className="advantages__main-text">Wir schämen uns nicht, unsere Vorteile vorzuweisen, da wir sehr stolz auf diese sind. Hier einige, von denen Sie profitieren können:</div>
                    <div className="advantages__features">
                        <div className="advantages__features-left">
                            {
                                advantagesLeftBlock?.map((textBlock) => (
                                    <div key={textBlock.id} className="advantages__features-block">
                                        <div className="advantages__features-title">{textBlock.title}</div>
                                        <div className="advantages__features-text">{textBlock.text}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <img src={manImg} alt="dude" className="advantages__features-image" />
                        <div className="advantages__features-right">
                            {
                                advantagesRightBlock?.map((textBlock) => (
                                    <div key={textBlock.title} className="advantages__features-block">
                                        <div className="advantages__features-title">{textBlock.title}</div>
                                        <div className="advantages__features-text">{textBlock.text}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

