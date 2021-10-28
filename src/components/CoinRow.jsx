import React from 'react'

const CoinRow = ({coin,index}) => {
    console.log(coin,index)
    return  (
                    <tr >

                        <td> {index}</td>
                        <td >
                        <img src={coin.image} alt={coin.name} className="coin-image img-fluid "  />
                        <span>{coin.name}
                        <span className='symbolCoin text-muted'> {coin.symbol}</span>

                        </span></td>
                        <td >{coin.current_price }</td>
                        <td 
                            className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                        {coin.price_change_percentage_24h }
                        </td>
                        <td >{coin.total_volume }</td>
                            
                    </tr>

    )}

export default CoinRow
