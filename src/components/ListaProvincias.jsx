import React from "react";
import provincias from "../provincias";
import Option from "./Option";

const ListaProvincias = () => {
  const data = provincias.argentina;
  return (
    <>
      {data.map((provincia) => 
        // console.log(provincia.id);
        (<Option key={provincia.id} provincia={provincia} />)
      )}
    </>
  );
};

export default ListaProvincias;
