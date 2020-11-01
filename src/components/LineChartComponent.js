import React, {useEffect} from 'react'

const LineChartComponent = ({globals}) => {
  const canvasRef = React.createRef();
  let myChart;
  const data = globals !== undefined && Object.keys(globals).map(data => globals[data])

  useEffect(() => {
    myChart = new Chart(canvasRef.current, {
      type: 'line',
      options: {
	      maintainAspectRatio: true
      },
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'week'
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              min: 0
            }
          }
        ]
      },
      data: {
        labels: globals !== undefined && Object.keys(globals),
        datasets: [{
          label: "test title",
          data,
          fill: 'none',
          backgroundColor: "white",
          pointRadius: 2,
          borderColor: "black",
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