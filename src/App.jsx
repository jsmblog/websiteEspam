import './App.css'
import NavBarMenu from './components/NavBarMenu'
import PagePrincipal from './components/PagePrincipal';
import logoEspam from  './styles/images of the  website/logoEspam.png';
import logoUsuario from './styles/images of the  website/usuario.png'
import logoCampus from './styles/images of the  website/campusPolitecnico.jpg'
import logoMfl from './styles/images of the  website/mfl.png'
import logoNews from './styles/images of the  website/noticias.png'
import HumanityValues from './components/HumanityValues';
import logoGrip from './styles/images of the  website/apreton-de-manos.png'
import logoSecurity from './styles/images of the  website/proteger (1).png'
import logoTrust from './styles/images of the  website/confiar.png'
import logoHonesty from './styles/images of the  website/honesto.png'
import logoResponsability from './styles/images of the  website/responsabilidad.png'
import logoEnvironment from './styles/images of the  website/environment.png'
import logoBoost from './styles/images of the  website/impulsar.png'
import logoOpenMenu from './styles/images of the  website/open-menu.png'
import ButtonMenu from './components/ButtonMenu';

function App() {

  return (
    <div className="App">
        <NavBarMenu logoEspam={logoEspam} logoUsuario={logoUsuario}  /> 
        <ButtonMenu logoOpenMenu={logoOpenMenu} />
        <PagePrincipal logoCampus={logoCampus} logoEspam={logoEspam} logoMfl={logoMfl} logoNews={logoNews} />
        <HumanityValues logoGrip={logoGrip} logoSecurity={logoSecurity} logoTrust={logoTrust} logoHonesty={logoHonesty} logoResponsability={logoResponsability} logoEnvironment={logoEnvironment} logoBoost={logoBoost} />
    </div>
  )
}

export default App
