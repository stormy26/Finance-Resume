import { useState } from 'react'
import linkedinIcon from '../assets/linkedin.svg'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
        <div id="home-block">
            <section id="center-block">
                <div>
                    <h1>Hi I am Abby!</h1>
                    <p>
                        Numbers tell a story, and I make sure it’s the right one. 
                        I’m a CPA with 2    + years at SGV & Co. (EY Philippines), helping businesses stay compliant, 
                        read their financials clearly, and make decisions they can stand behind.
                    </p>
                </div>
                <div className="contact-buttons">

                </div>
                <div className="social-media-buttons">
                    <a id="linkedin-icon" href="https://www.linkedin.com/in/abby-gail-tiongson-cpa/" target="_blank" rel="noopener noreferrer" className="button-icon">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                </div>
                <div className="home-buttons">
                    <a id="getCV-button" type="button"
                            href="/Resume_Abby Tiongson_CPA.pdf"
                            download="Abby-Gail-Tiongson-Resume.pdf">
                        Resume
                    </a>
                </div>
            </section>
        </div>
        </>
    )
}

export default Home