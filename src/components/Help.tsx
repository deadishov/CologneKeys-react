import React from 'react'

import accordionArrow from '../assets/images/accordion-arrow.svg'


interface Item {
    text: string,
    hiddenText: string
}

interface HelpProps {
    list: Item[]
}


export const Help: React.FC<HelpProps> = ({ list }) => {
    const [selected, setSelected] = React.useState<number | null>(null)

    const toggle = (i: number) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <section className="help">
            <div className="container">
                <div className="help__content">
                    <div className="help__title title">So können Sie handeln, um unsere Hilfe zu bekommen.</div>
                    <div className="help__main-text">Wir haben für Sie alle Schritte aufgelistet, die Sie durchführen müssen, um stresslos an den <span className="help__main-text_blue">Schlüsseldienst Köln</span> zu kommen.</div>
                    <div className="help__info-block">
                        {
                            list.map((accordion, i) => (
                                <div key={i} className="help__accordion-wrapper">
                                    <div onClick={() => toggle(i)} className="help__accordion">
                                        <p>{accordion.text}</p>
                                        <img className={selected === i ? 'help__accordion-arrow_up' : 'help__accordion-arrow'} src={accordionArrow} alt="arrow" />
                                    </div>
                                    <div className={selected === i ? 'help__accordion-content_open' : 'help__accordion-content'}>{accordion.hiddenText}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

