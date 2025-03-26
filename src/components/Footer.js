import logo from "../assets/images/logo.svg"
import restaurante from "../assets/images/restaurante.jpg"

const Footer= ()=> {
  return(
    <section>
      <div>
        <img src={restaurante} alt="imagen del balcon" width={150} height={210}/>
        <img src={logo} alt="logo"/>
      </div>
    </section>
  )
}

export default Footer;