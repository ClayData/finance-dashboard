import React, { Component } from 'react';
import Chart from 'chart.js';
const axios = require ("axios");

export default class FinanceChart extends Component {
    constructor() {
        super()

        this.state = {
            symbol : 'AMZN',
            inputData: []
        }
    }
    chartRef = React.createRef();
   
    chartMin(arr) {
        let ret = Math.floor(Math.max((Math.min(...arr) - 5), 0));
        return ret;
    }

   async componentDidMount() {
        try {
            const response = await axios({
              "method":"GET",
              "url":"https://finnhub-realtime-stock-price.p.rapidapi.com/quote",
              "headers":{
              "content-type":"application/octet-stream",
              "x-rapidapi-host":"finnhub-realtime-stock-price.p.rapidapi.com",
              "x-rapidapi-key":"caaa1aa51cmsh34aeffc6045e01dp1cb5e9jsnff5f9d0222cc"
              },"params":{
              "symbol":this.state.symbol
              }
              });
            let finData = await response.data;
            this.setState({ 
                inputData: [finData.c, finData.h, finData.l, finData.o, finData.pc]
            })
            
          } catch (error) {
            console.error(error);
          }

        const myChartRef = this.chartRef.current.getContext("2d");

            
            console.log(this.state.inputData)
            new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: ['Current', 'High', 'Low', 'Open', 'Prev. Close'],
                datasets: [{
                    label: 'Major stock points',
                    data: this.state.inputData,
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
                            min: this.chartMin(this.state.inputData),
                            
                        }, 
                        scaleLabel: {
                            display: true,
                            fontSize: 14,
                            labelString: "Price",
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

