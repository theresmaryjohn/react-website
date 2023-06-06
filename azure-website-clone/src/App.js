
import './App.css';
import AzureInnovating from './components/AzureInnovating';
import Footer from './components/Footer';
import Header from './components/Header';
import AzureBuild from './mainsection/AzureBuild';
import AzureCardImg from './mainsection/AzureCardImg';
import AzureCloud from './mainsection/AzureCloud';
import AzureServices from './mainsection/AzureServices';
import Developer from './mainsection/Developer';
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
     <Developer/>
     <AzureBuild/>
     <Footer/>
    </div>
  );
}

export default App;
