import { useState } from 'react'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <section id="center-block">
                <div>
                    <h1>Hi I am Abby!</h1>
                    <p>
                        Dedicated and detail-oriented tax advisor and external auditor With over 2 years Of
                        experience at SGV & Co. (EY PH) and a strong background in tax preparation, evaluating
                        financial statements, and advisory services.
                        Committed to driving value and trust in a fast-paced environment.
                    </p>
                </div>
                <div className="contact-buttons">

                </div>
                <div className="getCV-button">
                    <button type="button">
                        Resume
                    </button>
                </div>
            </section>
        </>
    )
}

export default Home