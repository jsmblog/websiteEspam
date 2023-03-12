import React from 'react'

const PagePrincipal = ({logoCampus ,logoEspam , logoMfl , logoNews}) => {
  return (
    <div className='cont-pagePrincipal'>
       <div className='cont-img-logoCampus'>
        <img className='img-logoCampus' src={logoCampus} alt="LogoCampus" />
       </div>
       <div className='cont-logoEspam-pp cont-logoEspam-pp-position'>
        <img className='img-logoEspam-pp bounce-in-top' src={logoEspam} alt="" />
       </div>
       <div className='name-university name-university_position'>
        <h1 className='text-name-university focus-in-expand-fwd'>
        Escuela Superior Politécnica Agropecuaría De Manabí M.F.L 
        </h1>
       </div>
       <div className='cont-logoMfl cont-logoMfl_position '>
            <div className='cont-background'>
                <img className='img-fundator scale-in-center' src={logoMfl} alt="" />
            </div>
       </div>
       <div className='cont-sms-mfl'>
        <div className='cont-sms roll-in-bottom'>
            <p>
            La Escuela Superior Politécnica Agropecuaria de <br/> Manabí  <a className='text-focus-in' href="#"> Manuel Félix López</a>, nace de la iniciativa <br/> de un gran político como Manuel Félix López, <br/> Patrono y mentor de esta gran obra educativa.
            </p>
        </div>
       </div>
       <div>
        <div className='cont-news vibrate-2'>
            <img width={50} src={logoNews} alt="" />
        </div>
       </div>
    </div>
  )
}

export default PagePrincipal