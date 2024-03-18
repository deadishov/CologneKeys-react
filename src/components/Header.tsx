import React from 'react'
import mainLogo from '../assets/images/logo.svg'
import phoneImg from '../assets/images/phone.svg'

interface MenuItem {
    text: string
}

interface HeaderProps {
    list: MenuItem[]
}

export const Header: React.FC<HeaderProps> = ({ list }) => {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const overlayRef = React.useRef<HTMLDivElement>(null)
    const body = document.querySelector('body')

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
        !menuOpen ? body?.classList.add('active') : body?.classList.remove('active')
    }


    React.useEffect(() => {
        const menuOutsideClick = (event: MouseEvent) => {
            if (overlayRef.current && event.composedPath().includes(overlayRef.current)) {
                setMenuOpen(false)
                body?.classList.remove('active')
            }
        }


        document.body.addEventListener('click', menuOutsideClick)
        return () => document.body.removeEventListener('click', menuOutsideClick)
    }, [])

    return (
        <header className="header">
            <div className={menuOpen ? "header__burger-menu_open" : "header__burger-menu"}>
                <div onClick={handleMenu} className="close-button">
                    <span className="close-button__stick"></span>
                    <span className="close-button__stick"></span>
                </div>
                <ul className="header__burger-menu-list">
                    {
                        list.map((item) => (
                            <li key={item.text} className="header__burger-menu-item">
                                <a href="#" className="header__burger-menu-link">{item.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="container">
                <div className="header__menu">
                    <div onClick={handleMenu} className="header__menu-burger">
                        <span className="string"></span>
                        <span className="string"></span>
                        <span className="string"></span>
                    </div>
                    <a className='header__menu-logo-link' href="#">
                        <img className='header__menu-logo' src={mainLogo} alt="logo" />
                    </a>
                    <ul className="header__menu-list">
                        {
                            list.map((item, i) => (
                                <li key={i} className="header__menu-item">
                                    <a href="#" className="header__menu-link">{item.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="phone">
                        <button className="header__menu-phone phone__button">
                            <img className="phone-img" src={phoneImg} alt="phone" />
                            <p className="header__menu-phone-content">01579 2395837</p>
                        </button>
                    </div>
                </div>
            </div>
            {
                menuOpen && <div ref={overlayRef} className="overlay"></div>
            }
        </header>
    )
}
