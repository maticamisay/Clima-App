import { useState, useEffect } from "react";
import useClima from "../hooks/useClima";
import provincias from "../provincias";
import ListaProvincias from "./ListaProvincias";

const Formulario = () => {
  const [estados, setEstados] = useState("");
  const [alerta, setAlerta] = useState("");
  const { busqueda, datosBusqueda, consultarClima } = useClima();

  const { ciudad, pais } = busqueda;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const { estados } = useClima();
  //     console.log(estados[0]);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);
  // const { estados } = useClima();
  useEffect(() => {
    setTimeout(() => {
      quePais(pais), console.log(estados);
    }, 500);
  }, [pais]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    setAlerta("");
    consultarClima(busqueda);
  };

  const quePais = (country) => {
    switch (country) {
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
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          {/* <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          /> */}
          <select>
            <ListaProvincias
              
              estados={estados}
            />
          </select>
        </div>

        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Formulario;
