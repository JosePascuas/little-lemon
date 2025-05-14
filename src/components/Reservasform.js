

const inputstyle = "p-3 text-center text-[22px] h-[38px] w-[260px] bg-tarjetas-fondo rounded-xl outline-transparent shadow-lg"

const selectstyle = "p-3 text-center text-[22px] h-[50px] w-[170px] mb-3 bg-tarjetas-fondo rounded-xl outline-transparent shadow-lg"

const Reservasform = () => {
  return(
    <section className="flex justify-center items-center w-full mt-20 mb-20">
      <form className="flex flex-col justify-center items-center w-[880px] gap-5 font-markazi text-2xl">
        <label for="nombre">
          Nombre de la persona
        </label>
        <input className={inputstyle} id="nombre" type="text"/>
        <label for="numero">
          Numero de contacto
        </label>
        <input className={inputstyle} id="numero"/>
        <label for="fecha">
          Elegir fecha
        </label>
        <input className={selectstyle} type="date" id="fecha"/>
        <label for="hora">
          Hora de la reserva
        </label>
        <select className={selectstyle} id="hora">
          <option>5:00pm</option>
          <option>6:00pm</option>
          <option>7:00pm</option>
          <option>8:00pm</option>
          <option>9:00pm</option>
          <option>10:00pm</option>
        </select>
        <label for="personas">
          Numero de personas
        </label>
        <input className={selectstyle} type="number" placeholder="1" min="1" max="10" id="personas" />
        <label for="ocasion">
          Tipo de evento
        </label>
        <select className={selectstyle} id="ocasion">
          <option>Cumpleaños</option>
          <option>Aniversario</option>
          <option>Compromisos</option>
          <option>Grados</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-5 mb-5">
          Reservar Mesa
        </button>
      </form>
    </section>
  )
}

export default Reservasform;