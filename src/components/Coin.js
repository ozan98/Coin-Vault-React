import React from 'react'

const Coin = ({coinName, coinPrice}) =>{
    return(
        <div className="coin-container">
            <div className="coin-row">
                <h3>{coinName}</h3>
                <div className="coin-image">
                    <div className="coin-price">
                        <p>{coinPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin