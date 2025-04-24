import inicio from '../assets/images/restauranfood.jpg'

const Presentacion = () =>{
  return (
    <section>
      <h1>Litte Lemon</h1>
      <h2>Neiva</h2>
      <p>
      Somos un restaurante mediterráneo familiar, centrado en recetas tradicionales servidas con un toque moderno.
      </p>
      <button>
        Reservar Mesa
      </button>
      <div>
        <img src={inicio} alt="imagen con comida" width="200" height="200"/>
      </div>
    </section>
  )
};

export default Presentacion;