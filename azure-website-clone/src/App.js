import { useEffect, useState } from "react";
import "./App.css";
import AzureInnovating from "./components/AzureInnovating";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AzureBuild from "./mainsection/AzureBuild";
import AzureCardImg from "./mainsection/AzureCardImg";
import AzureCloud from "./mainsection/AzureCloud";
import AzureServices from "./mainsection/AzureServices";
import Developer from "./mainsection/Developer";
import DiscoverAzure from "./mainsection/DiscoverAzure";
import Modernization from "./mainsection/Modernization";

function App() {
  const [card, setCard] = useState([]);
  const [cloud, setCloud] = useState([]);
  const [feature, setFetured] = useState([]);
  const [machine, setMachine] = useState([]);
  const [compute, setCompute] = useState([]);
  const [container, setContainer] = useState([]);
  const [hybrid, setHybrid] = useState([]);
  const [internet, setInternet] = useState([]);
  const [show, setShow] = useState("feature");
  const [icon,setIcon]=useState([])
  const [data,setData]=useState([]);
  const [filteredData,setFilteredData]=useState([])
  const [accelerate,setAccelerate]=useState([])
  const [discover,setDiscover]=useState([])
  const [developer,setDeveloper]=useState([])
  const [build,setBuild]=useState([])

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/theresmaryjohn/react-website/main/azure-website-clone/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCard(data.datas);
        setCloud(data.futureready);
        setFetured(data.featured);
        setMachine(data.machinelearning);
        setCompute(data.compute);
        setContainer(data.containers);
        setHybrid(data.hybrid);
        setInternet(data.internet);
        setIcon(data.customersinnovatingicons);
        setData(data.customersinnovating)
        setFilteredData([data.customersinnovating[0]])
        setAccelerate(data.accelerate)
        setDiscover(data.discover)
        setDeveloper(data.voiceassistant)
        setBuild(data.contentcards)
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  function handleClickFeature() {
    setShow("feature");
  }
  function handleClickMachine() {
    setShow("machine");
  }
  function handleClickCompute() {
    setShow("compute");
  }
  function handleClickContainer() {
    setShow("container");
  }
  function handleClickHybrid() {
    setShow("hybrid");
  }
  function handleClickInternet() {
    setShow("internet");
  }

  function handleClick(id) {
    let filtered = data.filter((item) => item.id === id);
    setFilteredData(filtered);
  }

  return (
    <div className="App">
      <Header />
      <AzureCardImg card={card} />
      <AzureCloud cloud={cloud} />
      <AzureServices
        feature={feature}
        machine={machine}
        compute={compute}
        container={container}
        hybrid={hybrid}
        internet={internet}
        show={show}
        handleClickFeature={handleClickFeature}
        handleClickMachine={handleClickMachine}
        handleClickCompute={handleClickCompute}
        handleClickContainer={handleClickContainer}
        handleClickHybrid={handleClickHybrid}
        handleClickInternet={handleClickInternet}/>
      <AzureInnovating icon={icon}  filteredData={filteredData} handleClick={handleClick}/>
      <Modernization accelerate={accelerate}/>
      <DiscoverAzure discover={discover}/>
      <Developer developer={developer}/>
      <AzureBuild build={build} />
      <Footer />
    </div>
  );
}

export default App;
