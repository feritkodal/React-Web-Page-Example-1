import React from 'react'
import './Landing.css'
import line from '../../images/line.png'
import { TiChevronRight } from "react-icons/ti";
import Navbar from '../../components/Navbar';
import { Helmet } from 'react-helmet';

const Landing = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Guest Traction</title>
                <meta name='description' content='Welcome to Guest Traction' />
                <link rel="canonical" href="http://guesttraction.com/home" />
            </Helmet>
            <Navbar />
            <div className="landing-full">
                <div className="landing-left">
                    <h1 className="landing-title">Full cycle Visitor Management<font color="red">.</font></h1>
                    <div className='landing-subtitle'>
                        <img className='landing-subtitle-line' src={line} alt="line" />
                        <p className='landing-subtitle-text-one'>Secure. Manage. Govern.</p>
                    </div>
                    <p className='landing-subtitle-text-two'>
                        Traction Guest provides organizations with a single place to secure,
                        manage and govern an entire cycle of visitor operations.
                    </p>
                    <button className='book-a-demo-button'>
                        Book a demo
                        <TiChevronRight className="book-a-demo-button-icon" />
                    </button>
                </div>
                <div className="landing-right">
                </div>
            </div>
        </div>
    )
}

export default Landing