import React from "react";
import useClima from "../hooks/useClima";

const Option = ({ provincia }) => {

  return (
      <option value={provincia.name}>
        {provincia.nombre}
      </option>
  );
};

export default Option;
