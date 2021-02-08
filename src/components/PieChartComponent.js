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
            'rgba(61, 252, 255, 0.82)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(255, 5, 26, 0.72)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(51, 255, 126, 0.87)'
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