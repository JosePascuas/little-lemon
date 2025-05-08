import { useState, useEffect } from "react"
import delivery from "../assets/icons/delivery-movement-svgrepo-com.svg"

const Cardmenu = ({seleccionados=[]}) => {
  const [menu, setMenu] = useState([])

  useEffect(()=>{
    fetch("/menu.json")
      .then((response)=>(response.json()))
      .then((data)=>(setMenu(data)))
      .catch((error)=> console.log("error al cargar al menú:",error))
  },[]);

  const platosDestacados = seleccionados.length > 0
  ? menu.filter((item)=>seleccionados.includes(item.id))
  : menu;

  return(
    <section className="flex flex-col w-full items-center justify-center mt-10">
      <ul className="flex flex-col md:flex-wrap w-full items-center justify-center md:flex-row mt-10 md:mt-10 md:max-w-[880px] lg:justify-between md:items-stretch gap-5 " >
        {platosDestacados.map((item) =>(
          <li className="flex flex-col w-[269px] min-h-[470px] bg-tarjetas-fondo rounded-t-2xl" key={item.id}>
            <img className="w-[270px] h-[178px] rounded-t-2xl" src={item.imagen} alt={item.nombre}/>
            <div className=" flex flex-1 flex-col mb-4 mt-4 ml-3 mr-3 gap-10">
              <div className="flex flex-row justify-between text-lg font-karla font-bold">
                <h3>{item.nombre}</h3>
                <p className="text-rojo">{item.precio}</p>
              </div>
              <p className="flex  flex-1 flex-col font-karla font-base font-normal ">{item.descripcion}</p>
              <div className="flex flex-row justify-center gap-1 items-center md:justify-start">
                <a className="font-karla font-bold font-lg" href="">Hacer pedido</a>
                <img className="w-[15px] h-[20px]" src={delivery} alt="Imagen alusiva"/>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Cardmenu;