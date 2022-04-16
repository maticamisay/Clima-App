import { React, useEffect } from "react";
import Option from "./Option";


function ListaProvincias({ estados }) {
  let datos =""
  if (estados != "") {
    datos = estados;
    console.log(datos);
  }
  return (
    <>
    {datos.length>1&&
    datos.map((provincia) => (
      <Option key={provincia.nombre} provincia={provincia} />
    ))
    }
    </>
  );
}

export default ListaProvincias;
