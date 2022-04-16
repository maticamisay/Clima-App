import { React, useEffect } from "react";
import Option from "./Option";
import useClima from "../hooks/useClima";

function ListaProvincias({ estados,setAlerta }) {
  const { busqueda, datosBusqueda } = useClima();
  const { ciudad, pais } = busqueda;

  let datos = "";
  if (estados != "") {
    datos = estados;
    console.log(datos);
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
