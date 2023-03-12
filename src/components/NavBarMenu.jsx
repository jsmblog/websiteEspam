import React from 'react'

const NavBarMenu = ({logoEspam , logoUsuario }) => {


  return (
    <>
        <nav className='navBarMenu'>
        <div className='container-navBar'>
            <div>
                <img className='img-logoEspam' src={logoEspam} alt="LogoEspam" />
            </div>
            <div>
                <div className='cont-logoUsusario'> 
                    <img className='img-logoUsuario pulsate-fwd' src={logoUsuario} alt="SGA" /><br />
                    <span className='span-navBar pulsate-fwd'>S.G.A</span>
                </div>
            </div>
            <div className='select-navBar'>
               <div>
               <select className='selec-naBvar-options' name="itemOne">
                <option value="University">University</option>
                <option value="Option1">Option1</option>
                <option value="Option2">Option2</option>
                <option value="Option3">Option3</option>
                </select>
               </div>
               <div>
               <select className='selec-naBvar-options'  name="itemOne">
                <option value="News">News</option>
                <option value="Option1">Option1</option>
                <option value="Option2">Option2</option>
                <option value="Option3">Option3</option>
                </select>
               </div>
               <div>
               <select className='selec-naBvar-options' name="itemOne">
                <option value="Careers">Careers</option>
                <option value="Option1">Option1</option>
                <option value="Option2">Option2</option>
                <option value="Option3">Option3</option>
                </select>
               </div>
               <div>
               <select className='selec-naBvar-options' name="itemOne">
                <option value="Contacts">Contacts</option>
                <option value="Option1">Option1</option>
                <option value="Option2">Option2</option>
                <option value="Option3">Option3</option>
                </select>
               </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBarMenu