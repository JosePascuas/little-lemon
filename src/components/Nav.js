import logo from '../assets/images/logo.svg'

const Nav = () => {
  return(
  <section className="flex flex-col md:flex-row items-center justify-center w-full md:mb-5 md:mt-5">
    <img className='w-[190px] h-[56px]' src={logo} alt='Logotipo'/>

    <ul className="flex w-full md:w-[650px] justify-center mt-5 md:mt-0 md:ml-10 mb-5 md:mb-0 md:justify-end gap-[10px] md:gap-[20px] font-karla text-base font-extrabold">
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#nosotros">Nosotros</a></li>
      <li><a href="#menu">Menú</a></li>
      <li><a href="#reservas">Reservas</a></li>
      <li><a href="#ordenar">Ordenar</a></li>
    </ul>
</section>
  )
}
export default Nav;