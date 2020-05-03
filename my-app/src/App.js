import React from 'react';
import FinanceChart from './components/FinanceChart/FinanceChart';
import SearchAppBar from './components/SearchAppBar/SearchAppBar';
import chartCall from './utils/API';


class App extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    symbol : '',
    name: '',
    inputData: []
    }
}

getData = (input) => {
  chartCall(input).then(res => this.setState({ inputData: res }))
  .catch(err => console.log(err))
  console.log(this.state.inputData)
}

handleInputChange = e => {
  let value = e.target.value
  this.setState({ input: [] })
  this.getData(value)
}


  render(){
    const { name, symbol, inputData } = this.state
  return (
    <div>
      <SearchAppBar 
      handleInputChange={this.handleInputChange}
      />
      <FinanceChart 
      name={name}
      symbol={symbol}
      inputData={inputData}
      />
    </div>
  );
  }
}

export default App;
