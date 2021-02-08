import React from 'react'
import NumberFormat from 'react-number-format';

const DeathsComponent = ({deaths}) => {
  return (
    <div>Total deaths: <NumberFormat value={deaths} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} /></div>
  )
}

export default DeathsComponent