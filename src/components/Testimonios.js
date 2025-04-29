import {useState,useEffect} from "react"

const Testimonios = () => {
  const[testimonios,setTestimonios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const seleccionados= [1,2,3,4];

  useEffect(()=>{
    fetch("/testimonios.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pueden obtener los testimonios")
      };
      return response.json();
    })
    .then((data) => {
      setTestimonios(data);
      setLoading(false)
    })
    .catch((error)=> {
      setError(error.message);
      setLoading(false);
    })
  },[]);

  const clientesDestacados= testimonios.filter((testimonio)=>seleccionados.includes(testimonio.id));

  if (loading) return <p>Cargando testimonios...</p>;
  if (error) return <p>Error: {error}</p>;

  return(
    <section className=" flex w-full flex-col items-center mt-20">
      <section className="flex flex-col md:max-w-[880px] items-center">
        <h2 className="font-markazi text-6xl font-medium">Testimonios</h2>
        {clientesDestacados.length > 0 ? (
          <ul className="flex flex-col justify-center items-center md:items-stretch w-full flex-wrap md:max-w-[880px] md:flex-row mt-20 mb-20 gap-5">
            {clientesDestacados.map((testimonio)=>(
              <li className="flex flex-col justify-between bg-letras-amarillas rounded-xl w-[205px] min-h-[253px] h-auto p-4 gap-4" key={testimonio.id}>
                <h3 className="text-base font-karla font-extrabold">{testimonio.nombre}</h3>
                <img className="w-[70px] h-[70px] " src={testimonio.imagen}/>
                <p className="font-karl text-base font-medium text-letras-oscuras break-words mb-5">{testimonio.nota}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay testimonios Disponibles...</p>
        )}
      </section>
    </section>
  )
}

export default Testimonios;