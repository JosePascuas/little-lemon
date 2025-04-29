import { useState, useEffect } from "react";
import Cardmenu from "./Cardmenu";

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
      <Cardmenu/>
      ) : (
        <p>No hay platos en el menú por el momento</p>
      )}
    </section>
  )
}

export default Menu;