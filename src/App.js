import React, {useEffect, useState} from "react";
import PieChartComponent from './components/PieChartComponent'
import DeathsComponent from './components/DeathsComponent'
import InfectedComponent from './components/InfectedComponent'
import LineChartComponent from './components/LineChartComponent'

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
      <DeathsComponent deaths={statistics.Global !== undefined && statistics.Global.TotalDeaths} />
      <InfectedComponent infected={statistics.Global !== undefined && statistics.Global.TotalConfirmed}/>
      <PieChartComponent globals={statistics.Global} />
      <LineChartComponent globals={statistics.Global} />
      app
    </div>
  );
};

export default App;
