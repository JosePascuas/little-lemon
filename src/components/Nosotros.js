import chef from "../assets/images/chef-b.jpg"
import chefs from "../assets/images/MarioandAdrian.jpg"

const Nosotros = () => {
  return(
    <section>
      <h1>
        Little lemon
      </h1>
      <p>En Little Lemon, fusionamos lo mejor de la gastronomía mediterránea con el increíble toque de la región opita.  Cada plato es una combinación de sabores frescos y auténticos, preparados con ingredientes de alta calidad y un toque de tradición local.  Nuestro compromiso es ofrecer una experiencia culinaria única, donde la cultura y el sabor se encuentran en cada bocado.</p>
      <div>
        <img src={chef} alt="chef preparando comida" width={150} height={200}/>
        <img src={chefs} alt="chefs hablando en cocina" width={150} height={200}/>
      </div>
    </section>
  )
}

export default Nosotros;