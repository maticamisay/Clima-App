import { useState, useEffect } from "react";
import useClima from "../../hooks/useClima";
import provincias from "../../provincias";
import ListaProvincias from "./ListaProvincias";

const Formulario = () => {
  const [estados, setEstados] = useState("");
  const { 
    busqueda, 
    datosBusqueda, 
    handleSubmit, 
    alerta 
  } = useClima();

  const { pais } = busqueda;

  useEffect(() => {
    setTimeout(() => {
      quePais(pais);
    }, 500);
  }, [pais]);

  const quePais = (country) => {
    switch (country) {
      case "US":
        return setEstados(provincias.estadosUnidos);
        case "MX":
        return setEstados(provincias.mexico);
      case "AR":
        return setEstados(provincias.argentina);
      case "CL":
        return setEstados(provincias.chile);
    }
  };

  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}

      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <select id="pais" name="pais" onChange={datosBusqueda} value={pais}>
            <option value=""> Seleccione un país</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CL">Chile</option>
          </select>
        </div>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <ListaProvincias estados={estados} />
        </div>

        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Formulario;
