import React from 'react'

//stylesheet imports
import '../styleSheet/Coin.css'

const Coin = ({coinName, 
            coinPrice, 
            coinImage, 
            coinVolume, 
            coinSymbol,
            coinPriceChange24,
            coinMarketCap}) =>{
    return(
            <tr className="coin-row">
                <td className="coin-name"><img src={coinImage}></img> <h3>{coinName}</h3></td>
                <td><p>{coinSymbol.toUpperCase()}</p></td>
                <td><p>${coinPrice}</p></td>
                <td><p>{coinVolume.toLocaleString()}</p></td>
                <td>{
                    coinPriceChange24 < 0 ? (
                    <p className="coin-red">{coinPriceChange24.toFixed(2)}</p>)
                    : 
                    (<p className="coin-green">{coinPriceChange24.toFixed(2)}</p>)
                }
                </td>
                <td><p>${coinMarketCap.toLocaleString()}</p></td>
            </tr>
    )
}

export default Coin