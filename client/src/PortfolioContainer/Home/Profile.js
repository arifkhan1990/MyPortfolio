import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='cloz'>
                        <div className="cloz-icon">
                            <a href='https://www.facebook.com/arif.khan.shubro/'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.instagram.com/arif.khan.1990/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/arif-khan-2b4b23118/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter-square'></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='profile-details-name'>
                  <span className="primary-text">
                      {" "}
                       Hello, I'M <span className="highlighted-text">Arif Khan</span>
                  </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Programmer 🛑🥊",
                                1000,
                                "Full Stack Dev 💻",
                                1000,
                                "Php & Laravel Dev 💕",
                                1000,
                                "MERN Stack Dev 🕸️",
                                1000,
                                "React/React Native Dev 📱",
                                1000,
                            ]}
                            />
                        </h1>
                        <span className="profoile-role-tagline">
                            Hire me Or Knock of building application with front and back end operation.
                        </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn">
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href="Arif_khan_(Software Engineer)_03.pdf" download="Arif_khan_(Software Engineer)_03.pdf">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                    <div className="profile-picture-background"></div>
            </div>
        </div>
    )
}
