import Formulario from "../components/Formulario"
import Resultado from "../components/Resultado"
import Loading from "../components/Loading"
import useClima from "../hooks/useClima"

const AppClima = () => {

  const { resultado, cargando, noResultado } = useClima()

  return (
    <>
        <main className="dos-columnas">
            <Formulario />

            { 
              cargando ? <Loading /> : 
              resultado?.name ? <Resultado /> :
              noResultado ? <p>{noResultado}</p>
              : <p>El clima se va a mostrar aquí</p>
            }
            
        </main>
    </>
  )
}

export default AppClima