import React, { Component } from 'react';
import Chart from 'chart.js';
let myBarChart;


export default class FinanceChart extends Component {
    
    
    chartRef = React.createRef();
   
    //Used to set minimum val of y-axis
    chartMin(arr) {
        let ret = Math.floor(Math.max((Math.min(...arr) - 5), 0));
        return ret;
    }
          //Create bar chart of selected stock

    componentDidMount(){
        this.buildChart()
    }

    componentDidUpdate(){  
        this.buildChart()
    }
 
    buildChart = () => {
         const myChartRef = this.chartRef.current.getContext("2d");

         if(typeof myBarChart !== "undefined") myBarChart.destroy()

        myBarChart = new Chart(myChartRef, {
          type: 'bar',
          data: {
              labels: ['Current', 'High', 'Low', 'Open', 'Prev. Close'],
              datasets: [{
                  label: '',
                  data: this.props.inputData,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              title: {
                  display: true,
                  text: `${this.props.name}`
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          min: this.chartMin(this.props.inputData),
                          
                      }, 
                      scaleLabel: {
                          display: true,
                          fontSize: 14,
                          labelString: "Stock Price",
                      }
                  }]
              }
          }
      });
      
    }

    render() {
    return (
    <div>
        
        <canvas id="myChart" ref={this.chartRef} />
        
    </div>
    )
    }
}