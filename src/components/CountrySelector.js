import React, {useState} from 'react';
import ReactFlagsSelect from 'react-flags-select';

const CountrySelector = ({onSelectCountry}) => {
  const [selected, setSelected] = useState('');

  const handleCountrySelector = (code) => {
    setSelected(code)
    onSelectCountry(code)
  }


  return (
    <ReactFlagsSelect
      searchable
      selected={selected}
      selectButtonClassName="flag-test"
      onSelect={code => handleCountrySelector(code)}
    />
  )
}

export default CountrySelector