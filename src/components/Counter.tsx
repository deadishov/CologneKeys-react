import React from 'react'
import googleImg from '../assets/images/google-img.svg'
import stars from '../assets/images/stars.svg'
import checkMark from '../assets/images/counter-checkmark.svg'
import phoneImg from '../assets/images/phone.svg'

export const Counter = () => {
    return (
        <section className="counter">
            <div className="container">
                <div className="counter__content">
                    <div className="counter__grade">
                        <img src={googleImg} className="counter__logo" alt="google" />
                        <div className="counter__grade-text">
                            <p className="counter__website">schluesseldienst-koeln-24.de</p>
                            <div className="counter__grade-line">
                                <p className="counter__grade-name">Ausgezeichnet</p>
                                <img src={stars} alt="stars" className="counter__stars" />
                            </div>
                            <p className="counter__stats">4,9 von 5,0 aus 183 Bewertungen</p>
                        </div>
                    </div>
                    <div className="counter__service">
                        <div className="counter__service-block">
                            <div className="counter__service-line">
                                <img src={checkMark} alt="check-mark" className="counter__check-mark" />
                                <p className="counter__service-text">24 Std. Service</p>
                            </div>
                            <div className="counter__service-line">
                                <img src={checkMark} alt="check-mark" className="counter__check-mark" />
                                <p className="counter__service-text">Aufsperrdienst mit 24 Std. Service</p>
                            </div>
                        </div>
                        <div className="counter__service-block">
                            <div className="counter__service-line">
                                <img src={checkMark} alt="check-mark" className="counter__check-mark" />
                                <p className="counter__service-text">Türöffnung ohne Schäden</p>
                            </div>
                            <div className="counter__service-line">
                                <img src={checkMark} alt="check-mark" className="counter__check-mark" />
                                <p className="counter__service-text">In 10 – 30 Minuten vor Ort</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="phone">
                    <button className="counter__phone phone__button">
                        <img className="phone-img" src={phoneImg} alt="phone" />
                        <p className="phone__content">01579 2395837</p>
                    </button>
                </div>
            </div>
        </section>
    )
}
