
import './App.css';
import Header from './components/Header';
import AzureCardImg from './mainsection/AzureCardImg';
import AzureCloud from './mainsection/AzureCloud';
import AzureServices from './mainsection/AzureServices';



function App() {
  return (
    <div className="App">
      <Header/>
      <AzureCardImg/>
      <AzureCloud/>
      <AzureServices/>
    </div>
  );
}

export default App;
