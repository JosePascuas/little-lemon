import logo from "../assets/images/logo.svg"
import restaurante from "../assets/images/restaurante.jpg"

const Footer= ()=> {
  return(
    <section>
      <div>
        <img src={restaurante} alt="imagen del balcon" width={150} height={210}/>
        <img src={logo} alt="logo"/>
      </div>
      <div>
        <div>
          <h1>Navegar</h1>
          <ul>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Menú</li>
            <li>Reservas</li>
            <li>Ordenar</li>
            <li>Iniciar sesion</li>
          </ul>
        </div>
        <div>
          <h1>Contacto</h1>
          <ul>
            <li>Dirección</li>
            <li>Número</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h1>Redes Sociales</h1>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Whatsapp</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer;