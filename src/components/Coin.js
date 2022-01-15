import React from 'react'

const Coin = ({coinName, 
            coinPrice, 
            coinImage, 
            coinVolume, 
            coinSymbol,
            coinPriceChange24,
            coinMarketCap}) =>{
    return(
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin-image">
                    <img src={coinImage} alt="coin"></img>
                </div>
                <h3>{coinName}</h3>
                <div className="coin-symbol">
                    <p>{coinSymbol.toUpperCase()}</p>
                </div>
                <div className="coin-price-data">
                    <p>${coinPrice}</p>
                    <p>{coinVolume.toLocaleString()}</p>
                    {coinPriceChange24 < 0 ? (
                        <p className="coin-red">{coinPriceChange24.toFixed(2)}</p>
                    ) : (
                        <p className="coin-green">{coinPriceChange24.toFixed(2)}</p>
                    )}
                    <p>${coinMarketCap.toLocaleString()}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Coin