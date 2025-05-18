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
    <section className=" flex justify-center items-center flex-col w-full">
      <div className="flex flex-wrap justify-center items-center max-w-[880px] mb-10">
        <h1 className="font-markazi text-6xl text-center mt-20">Menú del Restaurante</h1>
        {menu.length > 0 ? (
        <Cardmenu/>
        ) : (
          <p className="font-markazi text-6xl mt-20">No hay platos en el menú por el momento</p>
        )}
      </div>
    </section>
  )
}

export default Menu;