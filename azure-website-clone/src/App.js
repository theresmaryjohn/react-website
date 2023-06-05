
import './App.css';
import AzureInnovating from './components/AzureInnovating';
import Header from './components/Header';
import AzureCardImg from './mainsection/AzureCardImg';
import AzureCloud from './mainsection/AzureCloud';
import AzureServices from './mainsection/AzureServices';
import Modernization from './mainsection/Modernization';




function App() {
  return (
    <div className="App">
      <Header/>
      <AzureCardImg/>
      <AzureCloud/>
      <AzureServices/>
      <AzureInnovating/>
     <Modernization/>
    </div>
  );
}

export default App;
