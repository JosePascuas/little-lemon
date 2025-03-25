import { useState, useEffect } from "react"
import delivery from "../assets/icons/delivery-movement-svgrepo-com.svg"

const Destacados = () => {
  const [menu, setMenu] = useState([])

  const seleccionados=[1,2,3]

  useEffect(()=>{
    fetch("/menu.json")
      .then((response)=>(response.json()))
      .then((data)=>(setMenu(data)))
      .catch((error)=> console.log("error al cargar al menú:",error))
  },[]);

  const platosDestacados = menu.filter((item)=>seleccionados.includes(item.id))
  return(
    <section>
      <h1>Especiales de la semana!</h1>
      <button>Menú online</button>
      <ul>
        {platosDestacados.map((item) =>(
          <li key={item.id}>
            <img src={item.imagen} alt={item.nombre} width={200} height={150}/>
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <div>
              <a href="">Hacer pedido</a>
              <img src={delivery} alt="Imagen alusiva" width={10} height={15}/>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Destacados;