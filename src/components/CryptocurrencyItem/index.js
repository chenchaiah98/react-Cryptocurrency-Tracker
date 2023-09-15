// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachValue} = props

  return (
    <li className="CryptocurrenciesList-main-table-item">
      <div className="CryptocurrenciesList-main-table-type">
        <img
          className="CryptocurrenciesList-main-table-icon"
          src={eachValue.currency_logo}
          alt={eachValue.currency_name}
        />
        <p>{eachValue.currency_name}</p>
      </div>
      <div>
        <p>{eachValue.usd_value}</p>
      </div>
      <div>
        <p>{eachValue.euro_value}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
