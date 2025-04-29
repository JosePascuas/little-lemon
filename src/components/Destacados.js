import Cardmenu from "./Cardmenu";

const Destacados = () => {
  return(
    <section className="flex flex-col w-full items-center justify-center mt-10 md:mt-10">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between w-full md:max-w-[880px] md:flex-wrap mt-5">
        <h1 className="text-center mb-5 font-markazi font-medium text-6xl">Especiales de la semana!</h1>
        <button className="bg-letras-amarillas font-karla font-extrabold font-base rounded-xl w-[204px] h-[54px]">Menú online</button>
      </div>
      <Cardmenu/>
    </section>
  )
}

export default Destacados;