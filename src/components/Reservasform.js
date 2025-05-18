import React from "react";
import { useState } from "react";

const Reservasform = () => {

const inputstyle = "p-3 text-center text-[22px] h-[38px] w-[260px] bg-tarjetas-fondo rounded-xl outline-transparent shadow-lg";
const selectstyle = "p-3 text-center text-[22px] h-[50px] w-[200px] mb-3 bg-tarjetas-fondo rounded-xl outline-transparent shadow-lg";
const errores = "text-red-600 text-[18px]"

const [formData, setFormData] = useState({
  nombre: "",
  numero: "",
  fecha: "",
  hora: "",
  personas: 1,
  ocasion: "",
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
  const {id, value} = e.target;
  setFormData({
    ...formData, [id]:value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors ={};

  //Validacion para campo nombre
  if (!formData.nombre.trim()) {
    newErrors.nombre = "El nombre es obligatorio";
  } else if (formData.nombre.trim().length < 3) {
    newErrors.nombre = "EL nombre debe tener minimo 3 caracteres";
  }

  //validacion para campo numero de telefono
  if (!formData.numero.trim()) {
      newErrors.numero = "El número de contacto es obligatorio";
    } else {
      const phoneRegex = /^[\d\s\-+]+$/;
      if (!phoneRegex.test(formData.numero.trim())) {
        newErrors.numero = "El número de contacto contiene caracteres inválidos";
      } else if (formData.numero.trim().length !== 10) {
        newErrors.numero = "El número debe tener 10 caracteres";
      }
    }

  //validacion para fecha
  if (!formData.fecha) {
  newErrors.fecha = "La fecha es obligatoria";
  } else {
    const today = new Date();
    const selectedDate = new Date(formData.fecha);

    // Eliminar la hora para comparar solo la fecha
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      newErrors.fecha = "La fecha no puede ser anterior a hoy";
    }
  }

  //validacion hora sencilla
  if (!formData.hora) {
  newErrors.hora = "La hora de la reserva es obligatoria";
  }

  //validacion numero de personas
  if(!formData.personas) {
    newErrors.personas = "Seleccione la cantidad de asistentes"
  } else if (formData.personas === 0 || formData.personas > 10) {
    newErrors.personas = "Seleccione un numero entre 1 y 10 personas si son más de 10 personas comunicarse con el restaurante"
  }

  //validacion tipo de evento
  if(!formData.ocasion) {
    newErrors.ocasion = "Selecciona el tipo de evento que quieres reservar"
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }
  setErrors({})

  console.log( "Datos del formulario:", formData )

  setFormData({
    nombre: "",
    numero: "",
    fecha: "",
    hora: "",
    personas: "",
    ocasion: "",
  });
};


return(
  <section className="flex justify-center items-center w-full mt-20 mb-20">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-[880px] gap-5 font-markazi text-2xl">
      <label htmlFor="nombre">
        Nombre de la persona
      </label>
      <input
        className={`${inputstyle} ${errors.nombre ? 'border-2 border-red-500' : ''} transition-all duration-300 ease-in-out`}
        name="nombre"
        id="nombre"
        type="text"
        value={formData.nombre}
        onChange={handleChange}
      />
      {errors.nombre && <p className={errores}>{errors.nombre}</p>}
      <label htmlFor="numero">
        Numero de contacto
      </label>
      <input
        name="numero"
        className={`${inputstyle} ${errors.numero ? 'border-2 border-red-500' : ''} transition-all duration-300 ease-in-out`}
        id="numero"
        value={formData.numero}
        type="tel"
        onChange={handleChange}
        />
      {errors.numero && <p className={errores}>{errors.numero}</p>}
      <label htmlFor="fecha">
        Elegir fecha
      </label>
      <input
        name="fecha"
        className={`${inputstyle} ${errors.fecha ? 'border-2 border-red-500' : ''} transition-all duration-300 ease-in-out`}
        type="date"
        id="fecha"
        value={formData.fecha}
        onChange={handleChange}
      />
      {errors.fecha && <p className={errores}>{errors.fecha}</p>}
      <label htmlFor="hora">
        Hora de la reserva
      </label>
      <select
        name="hora"
        className={`${selectstyle} ${errors.hora ? 'border-2 border-red-500' : ''} transition-all duration-300 ease-in-out`}
        id="hora"
        value={formData.hora}
        onChange={handleChange}
      >
        <option value="">Selecciona una hora</option>
        <option value="5:00pm">5:00pm</option>
        <option value="6:00pm">6:00pm</option>
        <option value="7:00pm">7:00pm</option>
        <option value="8:00pm">8:00pm</option>
        <option value="9:00pm">9:00pm</option>
        <option value="10:00pm">10:00pm</option>
      </select>
      {errors.hora && <p className={errores}>{errors.hora}</p>}
      <label htmlFor="personas">
        Numero de personas
      </label>
      <input
        name="personas"
        className={`${inputstyle} ${errors.personas ? 'border-2 border-red-500' : ''} transition-all duration-300 ease-in-out`}
        type="number"
        id="personas"
        value={formData.personas}
        onChange={handleChange}
      />
      {errors.personas && <p className={errores}>{errors.personas}</p>}
      <label htmlFor="ocasion">
        Tipo de evento
      </label>
      <select
        name="ocasion"
        className={`${selectstyle} ${errors.ocasion ? 'border-2 border-red-500' : ''} transition-all duration-300 ease-in-out`}
        id="ocasion"
        value={formData.ocasion}
        onChange={handleChange}
      >
        <option value="">Selecciona un evento</option>
        <option value="Cumpleaños">Cumpleaños</option>
        <option value="Aniversario">Aniversario</option>
        <option value="Compromisos">Compromisos</option>
        <option value="Grados">Grados</option>
      </select>
      {errors.ocasion && <p className={errores}>{errors.ocasion}</p>}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-5 mb-5">
        Reservar Mesa
      </button>
    </form>
  </section>
)}

export default Reservasform;