import React, {useEffect} from 'react'
import moment from 'moment'

const LineChartComponent = ({globals}) => {
  const canvasRef = React.createRef();
  let myChart;
  const data = globals !== undefined && Object.keys(globals).map(data => globals[data])

  useEffect(() => {
    myChart = new Chart(canvasRef.current, {
      type: 'line',
      options: {
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              gridLines: {
                color: 'rgba(109, 174, 219, 0.8);',
                lineWidth: 1
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                color: 'rgba(109, 174, 219, 0.8);',
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
    <canvas ref={canvasRef} />
  )
}

export default LineChartComponent