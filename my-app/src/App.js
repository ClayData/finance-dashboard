import React from 'react';
import FinanceChart from './components/FinanceChart/FinanceChart';
import SearchAppBar from './components/SearchBar/SearchAppBar';


function App() {
  return (
    <div>
      <div>
        <SearchAppBar />
      </div>
      <FinanceChart />
    </div>
  );
}

export default App;
