import React from 'react'
import axios from 'axios'
import whiteLogo from '../assets/images/logo-white.svg'
import insta from '../assets/images/insta.svg'
import twitter from '../assets/images/twitter.svg'
import facebook from '../assets/images/facebook.svg'
import footerArrow from '../assets/images/footer-arrow.svg'


interface Item {
    text: string
}

interface FooterProps {
    areaList: Item[],
    serviceList: Item[]
}

export const Footer: React.FC<FooterProps> = ({ areaList, serviceList }) => {
    const [email, setEmail] = React.useState('')
    const [isError, setIsError] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (email) {
            if (!validateEmail(email)) {
                setIsError(true);
                setEmail('')
            } else {
                try {
                    axios.post('https://jsonplaceholder.typicode.com/posts', { email })
                    setIsSuccess(true)
                    setEmail('')
                    setIsError(false)
                } catch (error) {
                    console.log(error);
                    setEmail('')
                }
            }
        } else {
            return
        }

        setTimeout(() => {
            setIsSuccess(false)
        }, 2000)

    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__social">
                        <a href="#" className="footer__social-logo-link">
                            <img src={whiteLogo} alt="logo" className="footer__social-logo" />
                        </a>
                        <div className="footer__social-text">
                            Wir sind Ihr Helfer in Not in Sachen Schlüsseldienst. Zu jeder Tages- und Nachtzeit für Sie da!
                        </div>
                        <div className="footer__social-media">
                            <a href="#" className="footer__social-link">
                                <img src={insta} alt="insta" className="footer__insta" />
                            </a>
                            <a href="#" className="footer__social-link">
                                <img src={twitter} alt="twitter" className="footer__twitter" />
                            </a>
                            <a href="#" className="footer__social-link">
                                <img src={facebook} alt="facebook" className="footer__facebook" />
                            </a>
                        </div>
                    </div>
                    <div className="footer__features">
                        <div className="footer__features-area">
                            <p className="footer__title">Stadtteile</p>
                            <ul className="footer__features-list">
                                {
                                    areaList.map((item) => (
                                        <li key={item.text} className="footer__features-item">
                                            <img src={footerArrow} alt="arrow" />
                                            <a href="#" className="footer__features-link">{item.text}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="footer__features-service">
                            <p className="footer__title">Leistungen</p>
                            <ul className="footer__features-list">
                                {
                                    serviceList.map((item) => (
                                        <li key={item.text} className="footer__features-item">
                                            <img src={footerArrow} alt="arrow" />
                                            <a href="#" className="footer__features-link">{item.text}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="footer__contact">
                        <div className="footer__title">Kontakt</div>
                        <p className="footer__form-desc">Melden Sie sich für unseren Newsletter an und erhalten Sie die neuesten Tipps per E-Mail.</p>
                        <form className="footer__form">
                            <label className='footer__form-label'>
                                Ihre E-Mail-Adresse*
                            </label>
                            <input
                                onChange={onChangeInput}
                                className="footer__form-input"
                                placeholder="Ihre E-Mail-Adresse"
                                type="text"
                                name="E-Mail-Adress"
                                value={email}
                            />
                            {isError && <p className="footer__form-warning">Geben Sie eine gültige E-Mail-Adresse ein</p>}
                            <button onClick={handleSubmit} className={isSuccess ? "footer__form-button_success" : "footer__form-button"} type="submit">{isSuccess ? "Daten gesendet!" : "Anmelden"}</button>
                        </form>
                        <div className="footer__bottom-buttons">
                            <button className="footer__bottom-button">Impressum</button>
                            <button className="footer__bottom-button">Datenschutz</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}