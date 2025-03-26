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
    <section>
      <h2>Testimonios</h2>
      {clientesDestacados.length > 0 ? (
        <ul>
          {clientesDestacados.map((testimonio)=>(
            <li key={testimonio.id}>
              <h3>{testimonio.nombre}</h3>
              <img src={testimonio.imagen} width={40} height={40}/>
              <p>{testimonio.nota}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay testimonios Disponibles...</p>
      )}
    </section>
  )
}

export default Testimonios;