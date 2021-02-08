import React, {useEffect} from 'react'
import Chart from 'chart.js';

const PieChartComponent = ({globals}) => {
  const canvasRef = React.createRef();
  let myChart;

  const data = globals !== undefined && Object.keys(globals).map(data => globals[data])

  useEffect(() => {
    myChart = new Chart(canvasRef.current, {
      type: 'pie',
      options: {
	      maintainAspectRatio: true
      },
      data: {
        labels: globals !== undefined && Object.keys(globals),
        datasets: [{
          data,
          backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
					]
        }]
      }
    });
  }, [globals]);
  return (
    <canvas ref={canvasRef} />
  )
}

export default PieChartComponent