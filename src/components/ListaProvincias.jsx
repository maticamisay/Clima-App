import { React, useEffect } from "react";
import Option from "./Option";
import useClima from "../hooks/useClima";

function ListaProvincias({ estados,setAlerta }) {
  const { busqueda, datosBusqueda } = useClima();
  const { ciudad, pais } = busqueda;

  let datos = "";
  if (estados != "") {
    datos = estados
  }
  return (
    <>
      {datos.length > 1 ? (
        <select
          id="ciudad"
          name="ciudad"
          onChange={datosBusqueda}
          value={ciudad}
        >
          <option>Ingrese una ciudad</option>
          {datos.map((provincia) => (
            <Option key={provincia.nombre} provincia={provincia} />
          ))}
        </select>
      ):<select><option>Ingrese una ciudad</option> </select>
      }
    </>
  );
}

export default ListaProvincias;
