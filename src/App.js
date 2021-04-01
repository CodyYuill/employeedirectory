import './App.css';
import Header from './components/Header'
import SearchArea from './components/SearchArea'
import EmployeeList from './components/EmployeeList'

function App() {
  return (
      <div className="container-fluid">
          <Header />
          <SearchArea />
          <EmployeeList />
      </div>
  );
}

export default App;
