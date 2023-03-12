import React from 'react'

const HumanityValues = ({logoGrip , logoSecurity , logoTrust , logoHonesty , logoResponsability , logoEnvironment ,logoBoost}) => {
  return (
    <div className='position-humanityVal'>
        <div className='note-ofValues'>
            <h2>We are characterized by :</h2>
        </div>
            <div>
                <div className='cont-noteTwo-ofValues slide-in-blurred-left'>
                    <div className='cont-imgLogoValues'>
                        <div className='position-logo-center'><img className='size-logoValues' src={logoGrip} alt="logoGrip" /></div>
                        <h3>Commitment</h3>
                    </div>
                    <div className='cont-imgLogoValues'>
                        <div className='position-logo-center'><img className='size-logoValues' src={logoSecurity} alt="logoSecurity" /></div>
                        <h3>Security</h3>
                    </div>
                    <div className='cont-imgLogoValues'>
                        <div className='position-logo-center'><img className='size-logoValues' src={logoTrust} alt="logoTrust" /></div>
                        <h3>Trust</h3>
                    </div>
                    <div className='cont-imgLogoValues'>
                        <div className='position-logo-center'><img className='size-logoValues' src={logoHonesty} alt="logoHonesty" /></div>
                        <h3>Honesty</h3>
                    </div>
                    <div className='cont-imgLogoValues'>
                        <div className='position-logo-center'><img className='size-logoValues' src={logoResponsability} alt="logoResponsibility" /></div>
                        <h3>Responsibility</h3>
                    </div>
                    <div className='cont-imgLogoValues'>
                        <div className='position-logo-center'><img className='size-logoValues' src={logoEnvironment} alt="logoEnvironment" /></div>
                        <h3>We take care of the environment</h3>
                    </div>
                    <div className='cont-imgLogoValues'>
                        <div className='position-logo-center'><img className='size-logoValues' src={logoBoost} alt="logoBoost" /></div>
                        <h3>We promote economic development</h3>
                    </div>
                </div>
                <div className='offer-academic '>
                        <div>
                            <h2>Academic offer of the Espam MFL</h2>
                        </div>
                </div>
                <div className='paragraph-offer-academic' >
                    <div>
                        <p>
                        We offer young high school graduates an academic offer relevant to the area of ​​influence, <br /> scientific-technological advances  and social demand. At the third level, we have 11 <br /> careers and we currently have 4 postgraduate programs in force.
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default HumanityValues