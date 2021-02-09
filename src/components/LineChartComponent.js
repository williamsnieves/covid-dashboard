import React, {useEffect} from 'react'
import {Chart} from 'chart.js'

const LineChartComponent = ({globals}) => {
  const canvasRef = React.createRef();
  let myChart;
  const data = globals !== undefined && Object.keys(globals).map(data => globals[data])

  useEffect(() => {
    myChart = new Chart(canvasRef.current, {
      type: 'line',
      options: {
        maintainAspectRatio: true,
        legend: {
          labels: {
            fontColor: "#26ffe6",
          }
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#26ffe6",
              },
              gridLines: {
                color: '#d2fdff',
                lineWidth: 1
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#26ffe6",
              },
              gridLines: {
                color: '#d2fdff',
                lineWidth: 1
              }
            }
          ]
  
        },
      },
      data: {
        labels: globals !== undefined && Object.keys(globals),
        datasets: [{
          label: "Line graph for stats",
          data,
          fill: '#26ffe6',
          backgroundColor: "#26ffe6",
          pointRadius: 2,
          borderColor: "#26ffe6",
          borderWidth: 1,
          lineTension: 0  
        }]
      }
    });
  }, [globals]);

  return (
    <canvas data-testid="virus-line-chart" ref={canvasRef} />
  )
}

export default LineChartComponent