import chef from "../assets/images/chef-b.jpg"
import chefs from "../assets/images/MarioandAdrian.jpg"

const Nosotros = () => {
  return(
    <section className="flex justify-center  bg-primario-verde w-full">
      <div className=" flex flex-col md:justify-between md:flex-row w-[880px] gap-10 ml-5 mr-5">
          <div className=" flex flex-col justify-center items-center md:items-start w-auto md:w-[382px] md:mb-10 mb:5">
            <h1 className="text-letras-amarillas font-markazi font-medium text-6xl mt-5">
              Little lemon
            </h1>
            <h2 className="text-letras-claras font-markazi font-normal text-[40px]">Neiva</h2>
            <p className="text-center md:text-start text-letras-claras font-karla font-medium font-lg mt-10 mb-5 ">En Little Lemon, fusionamos lo mejor de la gastronomía mediterránea con el increíble toque de la región opita.  Cada plato es una combinación de sabores frescos y auténticos, preparados con ingredientes de alta calidad y un toque de tradición local.  Nuestro compromiso es ofrecer una experiencia culinaria única, donde la cultura y el sabor se encuentran en cada bocado.</p>
          </div>
          <div className="flex justify-center items-center flex-col lg:flex-row">
          <img className=" lg:absolute w-[350px] h-[300px] lg:w-[260px] lg:h-[360px] lg:translate-y-[100px] lg:right-[320px] z-10 rounded-xl mb-6 md:mb-0" src={chef} alt="chef preparando comida"/>
          <img className="lg:absolute md:w[200px] md:h-[150px] lg:w-[235px] lg:h-[320px] lg:right-[190px] z-20 rounded-lg hidden lg:block" src={chefs} alt="chefs hablando en cocina" width={150} height={200}/>
        </div>
      </div>
    </section>
  )
}

export default Nosotros;