import React from 'react'
import NumberFormat from 'react-number-format';

const InfectedComponent = ({infected}) => {
  return (
    <div>People infected: <NumberFormat value={infected} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} /></div>
  )
}

export default InfectedComponent