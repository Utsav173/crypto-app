import axios from "axios";
import { useEffect, useState } from "react";

const [historicData, setHistoricData] = useState([]);
  
  const fetchHistoricData = async () => {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=INR&days=1');
    const result = data.prices;
    setHistoricData(result);
  };
  
console.log(historicData)
  
  useEffect(() => {
    fetchHistoricData();
  }, []);
  console.log(historicData);

  const data = {
    labels: historicData.map((coin) => {
      let date = new Date(coin[0]);
      return date.toLocaleDateString();
    }),
    
    datasets: [
      {
        label: "Second dataset",
        data: historicData.map((coin) => coin[1]),
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
