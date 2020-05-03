const axios = require ('axios')

async function chartCall(company) {
    try {
        const response = await axios({
          "method":"GET",
          "url":"https://finnhub-realtime-stock-price.p.rapidapi.com/quote",
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"finnhub-realtime-stock-price.p.rapidapi.com",
          "x-rapidapi-key":"caaa1aa51cmsh34aeffc6045e01dp1cb5e9jsnff5f9d0222cc"
          },"params":{
          "symbol":company
          }
          });
        let data = await response.data;
        let finData = [data.c, data.h, data.l, data.o, data.pc]
        return finData;
      } catch (error) {
        console.error(error);
      }
    }
export default chartCall;