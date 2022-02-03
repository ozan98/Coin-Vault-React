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
            <tr>
                <td><img src={coinImage}></img> <h3>{coinName}</h3></td>
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
        // <div className="coin-container">
        //     <div className="coin-row">
        //         <div className="coin">
        //             <img src={coinImage} alt="coin"></img>
        //             <h3>{coinName}</h3>
        //         </div>
               
        //         <div className="coin-symbol">
        //             <p>{coinSymbol.toUpperCase()}</p>
        //         </div>
        //         <div className="coin-price">
        //             <p>${coinPrice}</p>
        //         </div>
        //         <div className="coin-volume">
        //             <p>{coinVolume.toLocaleString()}</p>
        //         </div>
        //         <div className="coin-price-change">
        //             {coinPriceChange24 < 0 ? (
        //                     <p className="coin-red">{coinPriceChange24.toFixed(2)}</p>
        //                 ) : (
        //                     <p className="coin-green">{coinPriceChange24.toFixed(2)}</p>
        //                 )}
        //         </div>
        //         <div className="coin-market-cap">
        //             <p>${coinMarketCap.toLocaleString()}</p>
        //         </div> 
        //     </div>
        // </div>
    )
}

export default Coin