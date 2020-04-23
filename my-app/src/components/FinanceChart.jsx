import React, { Component } from 'react';
import Chart from 'chart.js';
const axios = require ("axios");

export default class FinanceChart extends Component {
    chartRef = React.createRef();

    async getChartData() {
        try {
          const response = await axios({
            "method":"GET",
            "url":"https://finnhub-realtime-stock-price.p.rapidapi.com/quote",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"finnhub-realtime-stock-price.p.rapidapi.com",
            "x-rapidapi-key":"caaa1aa51cmsh34aeffc6045e01dp1cb5e9jsnff5f9d0222cc"
            },"params":{
            "symbol":"AAPL"
            }
            });
          let finData = response.data;
          let dataArray = [finData.c, finData.h, finData.l, finData.o, finData.pc];
    
          return(dataArray);
        } catch (error) {
          console.error(error);
        }
      }

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

         
    
            new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: ['Current', 'High', 'Low', 'Open', 'Prev. Close'],
                datasets: [{
                    label: '# of Votes',
                    data: this.getChartData(),
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
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    render() {
    return (
    <div>
        <canvas id="myChart" ref={this.chartRef}/>
        
    </div>
    )
    }
}

