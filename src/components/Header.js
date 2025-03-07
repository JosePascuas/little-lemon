import Nav from './Nav';
import logo from '../assets/images/logo.svg'


const Header= () =>{
  return(
    <>
      <img src={logo} alt='Logotipo'/>
      <Nav/>
    </>
  )
};

export default Header;
