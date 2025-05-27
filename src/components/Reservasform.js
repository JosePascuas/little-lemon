import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const getMinDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const Reservasform = () => {

  const inputstyle =
    "p-3 text-center text-[22px] h-[38px] w-[260px] bg-tarjetas-fondo rounded-xl outline-transparent shadow-lg";
  const selectstyle =
    "p-3 text-center text-[22px] h-[50px] w-[200px] mb-3 bg-tarjetas-fondo rounded-xl outline-transparent shadow-lg";
  const errores = "text-red-600 text-[18px]";

  const [formData, setFormData] = useState({
    nombre: "",
    numero: "",
    fecha: getMinDate(),
    hora: "",
    personas: 1,
    ocasion: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const crearFechaSinHora = (fechaStr) => {
    const fechaSolo = fechaStr.split("T")[0];
    const partes = fechaSolo.split("-");
    return new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validación para campo nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    } else if (formData.nombre.trim().length < 3) {
      newErrors.nombre = "El nombre debe tener mínimo 3 caracteres";
    }

    // Validación para campo número de teléfono
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

    // Validación para fecha
    if (!formData.fecha) {
      newErrors.fecha = "Por favor ingresa una fecha válida.";
    } else {
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);

      const fechaSeleccionada = crearFechaSinHora(formData.fecha);

      if (isNaN(fechaSeleccionada)) {
        newErrors.fecha = "Por favor ingresa una fecha válida.";
      } else if (fechaSeleccionada < hoy) {
        newErrors.fecha = "La fecha no puede ser anterior al día de hoy. Selecciona una fecha válida.";
      }
    }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

    // Validación hora sencilla
    if (!formData.hora) {
      newErrors.hora = "La hora de la reserva es obligatoria";
    }

    // Validación número de personas
    if (!formData.personas) {
      newErrors.personas = "Seleccione la cantidad de asistentes";
    } else if (
      Number(formData.personas) === 0 ||
      Number(formData.personas) > 10
    ) {
      newErrors.personas =
        "Seleccione un número entre 1 y 10 personas; si son más de 10, comunicarse con el restaurante";
    }

    // Validación tipo de evento
    if (!formData.ocasion) {
      newErrors.ocasion = "Selecciona el tipo de evento que quieres reservar";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const selectedDateString = formData.fecha;
    const localDate = new Date(selectedDateString + 'T00:00:00');
    const finalDateToSend = localDate.toISOString();
    console.log("Fecha enviada al backend (UTC ISO):", finalDateToSend);
    console.log("Datos completos enviados al backend:", { ...formData, fecha: finalDateToSend });

    console.log("Datos enviados al backend:", formData)

    try {
      const response = await fetch("https://little-lemon-backend-production.up.railway.app/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, fecha: finalDateToSend }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar la reserva");
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      toast.success("¡Reserva enviada exitosamente!", {
        className:
          "bg-gray-100 w-[400px] text-xl font-markazi text-center rounded-lg shadow-xl",
        bodyClassName: "text-xl font-markazi",
        progressClassName: "bg-gray-600",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({
        nombre: "",
        numero: "",
        fecha: getMinDate(),
        hora: "",
        personas: 1,
        ocasion: "",
      });
      setErrors({});
    } catch (error) {
      console.error(error);
      toast.error("Hubo un error al enviar la reserva. Intenta de nuevo.");
    }
  };

  return (
    <section className="flex justify-center items-center w-full mt-20 mb-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-[880px] gap-5 font-markazi text-2xl"
      >
        <label htmlFor="nombre">Nombre de la persona</label>
        <input
          className={`${inputstyle} ${
            errors.nombre ? "border-2 border-red-500" : ""
          } transition-all duration-300 ease-in-out`}
          name="nombre"
          id="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <p className={errores}>{errors.nombre}</p>}

        <label htmlFor="numero">Numero de contacto</label>
        <input
          name="numero"
          className={`${inputstyle} ${
            errors.numero ? "border-2 border-red-500" : ""
          } transition-all duration-300 ease-in-out`}
          id="numero"
          value={formData.numero}
          type="tel"
          onChange={handleChange}
        />
        {errors.numero && <p className={errores}>{errors.numero}</p>}

        <label htmlFor="fecha">Elegir fecha</label>
        <input
          name="fecha"
          className={`${inputstyle} ${
            errors.fecha ? "border-2 border-red-500" : ""
          } transition-all duration-300 ease-in-out`}
          type="date"
          id="fecha"
          value={formData.fecha}
          onChange={handleChange}
          min={getMinDate()}
        />
        {errors.fecha && <p className={errores}>{errors.fecha}</p>}

        <label htmlFor="hora">Hora de la reserva</label>
        <select
          name="hora"
          className={`${selectstyle} ${
            errors.hora ? "border-2 border-red-500" : ""
          } transition-all duration-300 ease-in-out`}
          id="hora"
          value={formData.hora}
          onChange={handleChange}
        >
          <option value="">Selecciona una hora</option>
          <option value="17:00:00">5:00pm</option>
          <option value="18:00:00">6:00pm</option>
          <option value="19:00:00">7:00pm</option>
          <option value="20:00:00">8:00pm</option>
          <option value="21:00:00">9:00pm</option>
          <option value="22:00:00">10:00pm</option>
        </select>
        {errors.hora && <p className={errores}>{errors.hora}</p>}

        <label htmlFor="personas">Numero de personas</label>
        <input
          name="personas"
          className={`${inputstyle} ${
            errors.personas ? "border-2 border-red-500" : ""
          } transition-all duration-300 ease-in-out`}
          type="number"
          id="personas"
          value={formData.personas}
          onChange={handleChange}
        />
        {errors.personas && <p className={errores}>{errors.personas}</p>}

        <label htmlFor="ocasion">Tipo de evento</label>
        <select
          name="ocasion"
          className={`${selectstyle} ${
            errors.ocasion ? "border-2 border-red-500" : ""
          } transition-all duration-300 ease-in-out`}
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

        <button
          type="submit"
          className="bg-primario-verde text-white px-4 py-2 rounded mt-2 hover:bg-letras-amarillas hover:text-black transition duration-300 ease-in-out"
        >
          Reservar
        </button>
      </form>
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Reservasform;
