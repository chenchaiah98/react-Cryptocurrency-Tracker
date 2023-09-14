// Write your JS code here

const CryptocurrencyItem = props => {
  const {eachValue} = props
  //   const {idcurrency_logo, currency_name, usd_value, euro_value} = eachValue

  return (
    <tr>
      <td className="CryptocurrenciesList-main-table-type">
        <img
          className="CryptocurrenciesList-main-table-icon"
          src={eachValue.currency_logo}
          alt={eachValue.currency_name}
        />
        {eachValue.currency_name}
      </td>
      <td>{eachValue.usd_value}</td>
      <td>{eachValue.euro_value}</td>
    </tr>
  )
}

export default CryptocurrencyItem
