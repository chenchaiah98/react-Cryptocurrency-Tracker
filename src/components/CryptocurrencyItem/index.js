// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachValue} = props

  return (
    <div className="CryptocurrenciesList-main-table-item">
      <div className="CryptocurrenciesList-main-table-type">
        <i>
          <img
            className="CryptocurrenciesList-main-table-icon"
            src={eachValue.currency_logo}
            alt={eachValue.currency_name}
          />
        </i>
        {eachValue.currency_name}
      </div>
      <div>
        <p>{eachValue.usd_value}</p>
      </div>
      <div>
        <p>{eachValue.euro_value}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
