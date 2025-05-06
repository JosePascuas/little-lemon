import logo from "../assets/images/logo.svg"
import restaurante from "../assets/images/restaurante.jpg"

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
            <h1 className="font-markazi text-[40px] font-normal">Navegar</h1>
            <ul className="font-karla text-lg font-bold">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Menú</a></li>
              <li><a href="#">Reservas</a></li>
              <li><a href="#">Ordenar</a></li>
            </ul>
          </div>
          <div>
            <h1 className="font-markazi text-[40px] font-normal">Contacto</h1>
            <ul className="font-karla text-lg font-bold">
              <li><a href="#">Dirección</a></li>
              <li><a href="#">Número</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </div>
          <div>
            <h1 className="font-markazi text-[40px] font-normal">Redes Sociales</h1>
            <ul className="font-karla text-lg font-bold">
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