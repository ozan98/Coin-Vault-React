import React,{useState, useEffect} from 'react'
import Header from './components/Header'
import Coin from './components/Coin'

import axios from 'axios'
const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false';

function App() {
  const [coin, setCoin] = useState([])

  useEffect(() => {
    axios.get(apiUrl).then(res => {
      console.log('data retrieved succesfully')
      setCoin(res.data)
      console.log(res.data)
    }).catch(error => {
      console.log('data retrieved unsuccesfully')
      console.log(error)
    })
  },[])


  return (
    <div className="app">
      <Header/>
      {coin.map(coin =>{
        return (
          <Coin key={coin.id} coinName={coin.id}
                coinPrice={coin.current_price}></Coin>
        )
      })}
    </div>
  );
}

export default App;
