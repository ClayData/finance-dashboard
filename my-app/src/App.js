import React from 'react';
import FinanceChart from './components/FinanceChart/FinanceChart';
import SearchAppBar from './components/SearchBar/SearchAppBar';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
        symbol : 'AMZN',
        name: 'AMAZON',
        inputData: []
    }
}


  render(){
  return (
    <div>
      <div>
        <SearchAppBar />
      </div>
      <FinanceChart />
    </div>
  );
  }
}

export default App;
