import React,{useState, useEffect} from 'react'

//compenent imports
import Header from './Header'
import Coin from './Coin'
import TableHeader from './TableHeader'

//stylesheet imports
import '../styleSheet/App.css'

import axios from 'axios'
const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false';

function App() {
  const [coin, setCoin] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

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

  const searchHandler = (event) => {
    setSearchQuery(event.target.value)
    console.log(searchQuery)
  }

  const filteredSearch = coin.filter(coin =>{
    return coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const getCoinList = () => {
    return filteredSearch.map((coin) => {
      return (
        <Coin key={coin.id} 
              coinName={coin.id}
              coinPrice={coin.current_price}
              coinImage={coin.image}
              coinVolume={coin.total_volume}
              coinSymbol={coin.symbol}
              coinPriceChange24={coin.price_change_percentage_24h}
              coinMarketCap={coin.market_cap}/>
      )
    })
  }


  return (
    <div className="app">
      <Header/>
      <div className="search-container">
        <form>
          <label>Search Crypto Currency</label>
          <input type="text" 
                  onChange={searchHandler}
                  placeholder="search"></input>
        </form>

      </div>
      <div className="table-container">
        <table>
          <thead>
            <TableHeader/>
          </thead>
          <tbody>
            {getCoinList()}
          </tbody>
        </table>
      </div>
      
  
    </div>
  );
}

export default App;
