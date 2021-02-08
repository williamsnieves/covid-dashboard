import React, {useEffect, useState} from "react";
import PieChartComponent from './components/PieChartComponent'
import DeathsComponent from './components/DeathsComponent'
import InfectedComponent from './components/InfectedComponent'
import LineChartComponent from './components/LineChartComponent'
import "./styles/grid.css";

const App = () => {
  const [statistics, setStatistics] = useState({});
  const covidUrl = 'https://api.covid19api.com/summary';
  useEffect(() => {
    const getCovidData = async () => {
      const covidData = await fetch(covidUrl);
      const results = await covidData.json();
      setStatistics(results);
    };

    getCovidData();
  }, []);

  console.log("statistics", statistics)
  /*var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});*/

  return (
    <div>
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
          <LineChartComponent globals={statistics.Global} />
        </div>
      </div>
    </div>
  );
};

export default App;
