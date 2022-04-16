import React from "react";
import useClima from "../hooks/useClima";

const Option = ({ provincia }) => {
  const { busqueda, datosBusqueda } = useClima();
  const { ciudad, pais } = busqueda;

  console.log(provincia);
  return (
    <option id="ciudad" name="ciudad" onChange={datosBusqueda} value={ciudad}>
      {provincia.nombre}
    </option>
  );
};

export default Option;
