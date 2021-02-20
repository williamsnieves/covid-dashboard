import React, {useEffect, useState} from "react";
import PieChartComponent from './components/PieChartComponent'
import DeathsComponent from './components/DeathsComponent'
import InfectedComponent from './components/InfectedComponent'
import LineChartComponent from './components/LineChartComponent'
import CountrySelector from './components/CountrySelector'

import "./styles/grid.css";
import "./styles/app.css";

const App = () => {
  const [statistics, setStatistics] = useState({});
  const covidUrl = 'https://api.covid19api.com/summary';
  useEffect(() => {
    const getCovidData = async () => {
      const covidData = await fetch(covidUrl, {mode: 'cors'});
      const results = await covidData.json();
      setStatistics(results);
    };

    getCovidData();
  }, []);

  const onSelectCountry = (code) => {

    const [countryData] =  statistics.Countries.filter(result => result.CountryCode === code)

    const {NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered} = countryData

    const filteredData = {...statistics, Global: {
      NewConfirmed,
      NewDeaths,
      NewRecovered,
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered
    }}

    setStatistics(filteredData)
  }

  const lineChartFilteredData = (globals) => {
    let newLineChartData = {...globals}

    delete newLineChartData.Date

    return newLineChartData
  }

  return (
    <div>
      <div className="country-selector">
        <CountrySelector onSelectCountry={onSelectCountry}></CountrySelector>
      </div>
      <div className="container">
        <div className="cell cell-1">
          <DeathsComponent deaths={statistics.Global !== undefined && statistics.Global.TotalDeaths} />
        </div>
        <div className="cell cell-2">
          <PieChartComponent globals={statistics.Global} />
        </div>
        <div className="cell cell-3">
          <InfectedComponent infected={statistics.Global !== undefined && statistics.Global.TotalConfirmed}/>
        </div>
        <div className="cell cell-4">
          <LineChartComponent globals={lineChartFilteredData(statistics.Global !== undefined && statistics.Global)} />
        </div>
      </div>
    </div>
  );
};

export default App;
