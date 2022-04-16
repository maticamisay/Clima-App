import React from "react";

const Option = ({ provincia }) => {
  Object.defineProperty(String.prototype, "capitalizarPrimeraLetra", {
    value: function () {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    writable: true, // Asi, puede sobreescribirse más tarde
    configurable: true, // Asi, puede borrarse más tarde
  });
  const nombre = provincia.nombre.toLowerCase();
  // console.log(nombre.capitalizarPrimeraLetra());
  return <option value={provincia.name}>{nombre.capitalizarPrimeraLetra()}</option>;
};

export default Option;
