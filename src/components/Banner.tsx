import React from 'react'
import checkMark from '../assets/images/check-mark.svg'
import bannerManImg from '../assets/images/banner-dude.png'
import phoneImg from '../assets/images/phone.svg'

export const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__content">
                    <div className="banner__text-block">
                        <h1 className="banner__title">Schlüsseldienst Köln</h1>
                        <div className="banner__textline">
                            <img src={checkMark} alt="check-mark" />
                            <p className="banner__text">in 15-30 Minuten vor Ort</p>
                        </div>
                        <div className="banner__textline">
                            <img src={checkMark} alt="check-mark" />
                            <p className="banner__text">24h Schlüsselnotdienst</p>
                        </div>
                        <div className="banner__textline">
                            <img src={checkMark} alt="check-mark" />
                            <p className="banner__text">Türöffnung ohne Schäden</p>
                        </div>
                        <p className="banner__priceline">Der Schlüsseldienst Köln öffnet jede Tür ohne Schlüssel ab <span className='price'>39,-€</span></p>
                        <div className="phone">
                            <button className="banner__phone phone__button">
                                <img className="phone__img" src={phoneImg} alt="phone" />
                                <p className="phone__content">01579 2395837</p>
                            </button>
                        </div>
                    </div>
                    <div className="banner__image-block">
                        <img className="banner__image" src={bannerManImg} alt="dude" />
                    </div>
                </div>
            </div>
        </section>
    )
}

