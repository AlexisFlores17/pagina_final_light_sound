import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row mr-0">
                    <div className="col-12 col-sm-6" id="hagamos">
                        <div className="contactanos">Hagamos algo juntos</div>
                        <div className="project">¿Tienes algún desafío creativo para nosotros? <br/>Nos encantaría escucharlo</div>                       
                    </div>
                    <div className="col-12 col-sm-6" id="contacto-animacion">
                        <p className="contact">
                            <a href="tel:+52 1 55 2746 0988" rel="noopener noreferrer" target="_blank" id="numero-animar">+52 1 55 2746 0988</a>
                            <br/>
                            <a href="mailto:contacto@lsd.com.mx" rel="noopener noreferrer" target="_blank" id="correo-animar">contacto@lsdlab.com.mx</a>
                        </p>
                                                
                        <h5 className="siguenos">Síguenos</h5>
                        <div className="social-icons">   
                            <a href="https://www.instagram.com/lab_lsd/" rel="noopener noreferrer" target="_blank">
                                <div className="icon">
                                    <span className="icon-text">IG</span>
                                </div>
                            </a>  

                            <a href="https://www.facebook.com/lab.lsd" rel="noopener noreferrer" target="_blank">
                                <div className="icon">
                                    <span className="icon-text">FB</span>
                                </div>
                            </a>

                            <a href="https://twitter.com/lab_lsd" rel="noopener noreferrer" target="_blank">
                                <div className="icon">
                                    <span className="icon-text">TW</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/company/light-sound-disruptive-lab" rel="noopener noreferrer" target="_blank">
                                <div className="icon">
                                    <span className="icon-text">LKD</span>
                                </div>
                            </a>                
                        </div>
                    </div>                   
                </div>
                
                
                
                
            </div>            
            <div className="copyright" id="copy-animacion">© LSD LAB {new Date().getFullYear()}</div>
        </footer>
        
    )
}
