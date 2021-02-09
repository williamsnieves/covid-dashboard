import React from 'react'
import NumberFormat from 'react-number-format';

const InfectedComponent = ({infected}) => {
  return (
    <div style={{color: 'rgba(216, 241, 160, 0.76)'}}>People infected: <NumberFormat value={infected} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} /></div>
  )
}

export default InfectedComponent