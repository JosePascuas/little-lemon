import logo from '../assets/images/logo.svg'

const Nav = () => {
  return(
    <section className="flex w-screen justify-center">
      <img src={logo} alt='Logotipo'/>
      <ul className="flex w-[700px] p-5 m-5 justify-end gap-[15px] font-karla font-extrabold">
        <li className="" href="#inicio">
          <a>Inicio</a>
        </li>
        <li href="#nosotros">
          <a>Nosotros</a>
        </li>
        <li href="#menu">
          <a>Menú</a>
        </li>
        <li href="reservas">
          <a>Reservas</a>
        </li>
        <li href="ordernar">
          <a>Ordenar</a>
        </li>
        <li href="#iniciar-sesion">
          <a>Iniciar sesion</a>
        </li>
      </ul>
    </section>
  )
}
export default Nav;