import inicio from '../assets/images/restauranfood.jpg'
import { Link } from 'react-router-dom';

const Presentacion = () =>{
  return (
    <section className='flex justify-center w-full bg-primario-verde'>
      <section className='flex flex-col w-[880px]  md:items-start md:flex-row'>
        <section className='flex flex-col justify-start items-center text-center md:text-left md:items-start md:flex-col w-full mt-5 md:mt-10 h-[350px]'>
          <h1 className='text-letras-amarillas text-6xl font-markazi font-medium'>Litte Lemon</h1>
          <h2 className='text-letras-claras text-[40px] font-markazi font-normal'>Neiva</h2>
          <p className='text-letras-claras text-base w-[280px] font-karla font-extrabold mt-5'>
          Somos un restaurante mediterráneo familiar, centrado en recetas tradicionales servidas con un toque moderno.
          </p>
          <Link to="/Reservaspage">
            <button className='text-letras-botones bg-letras-amarillas rounded-md w-[182px] h-[35px] font-karla text-base font-extrabold mt-10'>
              Reservar Mesa
            </button>
          </Link>
        </section>
        <div className='flex justify-center md:justify-end w-full mt-0'>
          <img className='w-[300px] h-[380px] md:w-[345px] md:h-[434px] object-cover rounded-lg shadow-lg md:translate-y-10'
          src={inicio}
          alt="imagen con comida"/>
        </div>
      </section>
    </section>
  )
};

export default Presentacion;