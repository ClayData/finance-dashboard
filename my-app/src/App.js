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
    // this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this)
    this.keyPressed = this.keyPressed.bind(this)
}

getData = (input) => {
  
  chartCall(input).then(res => this.setState({ inputData: res }))
  .catch(err => console.log(err))
  console.log(this.state.inputData)
}

keyPressed(event){
  if(event.key === "Enter"){
    this.getData(event.target.value)
  }
}




  render(){
    const { name, symbol, inputData } = this.state
  return (
    <div>
      <SearchAppBar 
      handleChange={this.handleChange}
      keyPressed={this.keyPressed}
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
