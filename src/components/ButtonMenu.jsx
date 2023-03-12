import React, { useState } from 'react'

const ButtonMenu = ({logoOpenMenu}) => {
  const [isOn, setIsOn] = useState(false)
  const handleIsOn = () => {
    setIsOn(!isOn)
  }
  const menuOpen = (isOn) ? "cont-menuOpen" : ""

  return (
    <>
            <div>
                <img onClick={handleIsOn} className='btn-openMenu' width={50} src={logoOpenMenu} alt="" />
            </div>
            <div id={`${menuOpen}`}>
              <div >
                <h2>University</h2>
                <h2>News</h2>
                <h2>Careers</h2>
                <h2>Contacts</h2>
              </div>
            </div>
    </>
  )
}

export default ButtonMenu