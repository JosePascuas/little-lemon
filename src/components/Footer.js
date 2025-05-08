import logo from "../assets/images/logo.svg"
import restaurante from "../assets/images/restaurante.jpg"
import { Link } from "react-router-dom"

const h1= "font-markazi text-[40px] font-normal"
const ul= "font-karla text-lg font-bold"

const Footer= ()=> {
  return(
    <section className="flex flex-col md:flex-row mt-20 w-full justify-center mb-20">
      <div className="flex flex-col md:flex-row md:w-[880px] justify-between">
        <div className="flex flex-col justify-center items-center mb-10 md:mb-0 md:mr-5">
          <img className="w-[203px] h-[198px] rounded-xl mb-5" src={restaurante} alt="imagen del balcon"/>
          <img className="w-[176px] h-[45px]" src={logo} alt="logo"/>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-[80px] ml-10">
          <div>
            <h1 className={h1}>Navegar</h1>
            <ul className={ul}>
              <Link to="/"><li><a>Inicio</a></li></Link>
              <li><a href="#nosotros">Nosotros</a></li>
              <Link to="/cartamenu"><li><a >Menú</a></li></Link>
              <Link to="/reservaspage"><li><a href="#">Reservas</a></li></Link>
              <li><a href="#">Ordenar</a></li>
            </ul>
          </div>
          <div>
            <h1 className={h1}>Contacto</h1>
            <ul className={ul}>
              <li><a href="#">Dirección</a></li>
              <li><a href="#">Número</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </div>
          <div>
            <h1 className={h1}>Redes Sociales</h1>
            <ul className={ul}>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Whatsapp</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;