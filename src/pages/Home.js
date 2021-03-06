import React from 'react';
import LSDbackground from '../video/backgroundweb.mp4';
// import arrow from '../images/arrow-right.svg';

export const Home = () => {
    return (
        <>
            <div className="home-video">
                <video autoPlay muted loop className="myVideo lax" type="video/mp4" playsInline data-lax-opacity="0 1, vh 0.3, (vh*2) 0 ">
                    <source src={LSDbackground} />
                </video>
            </div>

            <div className="home-container col-md-6 col-10">
                <h5 className="animate__animated animate__fadeInUp animate__slow">
                    Retamos el sentido de lo establecido con propuestas innovadoras en ciencia, arte y tecnología
                </h5>   
                
                {/* <div className="btn-row animate__animated animate__fadeIn animate__delay-2s ">
                    <button className="explore-button" >Explore
                        <a href="#explore-sect">
                            <div className="arrow-icon" >
                                <img src={arrow} alt="row"/>
                            </div>
                        </a>
                    </button>                 
                </div>              */}
            </div>  
            <div id="scroll-down-animation" className="lax" data-lax-opacity=" 0 1, (vh/10) 0 ">
                <span>
                    <div className="scroll-animation" id="sa-1">
                        <div id="sc-circle"></div>
                    </div>
                    <div className="scroll-animation" id="sa-2"></div>
                    <div className="scroll-animation" id="sa-3"></div>
                </span>
            </div> 
        </>
    )
}
