import logo from '../assets/images/logo.svg'

const Nav = () => {
  return(
    <section>
      <img src={logo} alt='Logotipo'/>
      <ul>
        <li href="#inicio">
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