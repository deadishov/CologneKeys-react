import React from 'react'
import specImg from '../assets/images/specialist.png'

export const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="container">
                <div className="about-us__content">
                    <div className="about-us__image-block">
                        <img className="specialist__image" src={specImg} alt="specialist" />
                    </div>
                    <div className="about-us__text-block">
                        <p className="about-us__title title">Überlassen Sie die Arbeit den Experten</p>
                        <p className="about-us__text">Alle unsere Mitarbeiter sind bestens ausgestattet, um jede Art von Tür zu öffnen. Die geschickten Hände unserer ausgebildeten Fachleute gepaart mit ihrem Werkzeug, das ständig nach dem letzten Stand erneuert wird, schaffen es in 95% aller Fälle, die Tür schadenfrei zu öffnen. Überzeugen Sie sich selbst davon und überprüfen Sie unbedingt, ob Sie irgendwelche Kratzer an der Tür finden. Wir haben nichts zu verbergen und demonstrieren stolz unsere Arbeit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

