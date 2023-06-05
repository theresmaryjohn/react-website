
import './App.css';
import AzureInnovating from './components/AzureInnovating';
import Header from './components/Header';
import AzureCardImg from './mainsection/AzureCardImg';
import AzureCloud from './mainsection/AzureCloud';
import AzureServices from './mainsection/AzureServices';
import DiscoverAzure from './mainsection/DiscoverAzure';
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
     <DiscoverAzure/>
    </div>
  );
}

export default App;
