import React from 'react'

const Option = ({provincia}) => {
    console.log(provincia);
  return (
    <option>{provincia.nombre}</option>
  )
}

export default Option