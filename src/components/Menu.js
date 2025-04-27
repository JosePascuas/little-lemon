import { useState, useEffect } from "react";
import delivery from "../assets/icons/delivery-movement-svgrepo-com.svg"

const Menu = () => {
  const [menu, setMenu] = useState([])

  useEffect(()=>{
    fetch('/menu.json')
      .then((response) => response.json())
      .then((data)=> setMenu(data))
      .catch((error)=> console.log("error al cargar el menú:",error))
  },[]);


  return(
    <section>
      <h1>Menú del Restaurante</h1>
      {menu.length > 0 ? (
      <ul>
        {menu.map((item) =>(
          <li key={item.id}>
            <img src={item.imagen} alt={item.nombre}/>
            <h3>{item.nombre}</h3>
            <p>{item.precio}</p>
            <p>{item.descripcion}</p>
            <div>
              <a href="">Hacer pedido</a>
              <img src={delivery} alt="Imagen alusiva"/>
            </div>
          </li>
        ))}
      </ul>
      ) : (
        <p>No hay platos en el menú por el momento</p>
      )}
    </section>
  )
}

export default Menu;