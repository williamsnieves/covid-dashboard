import React from 'react'
import NumberFormat from 'react-number-format';

const DeathsComponent = ({deaths}) => {
  return (
    <div style={{color: 'rgba(255, 5, 26, 0.72)'}}>Total deaths: <NumberFormat value={deaths} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} /></div>
  )
}

export default DeathsComponent