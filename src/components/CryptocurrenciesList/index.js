// Write your JS code here
import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {data: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const fetchData = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responce = await fetchData
    const apiData = await responce.json()

    this.setState({data: apiData})
  }

  render() {
    const {data} = this.state

    return (
      <>
        <div>
          <h1 className="CryptocurrenciesList-main-heading">
            Cryptocurrency Tracker
          </h1>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
        </div>
        <div>
          <table className="CryptocurrenciesList-main-table ">
            <tr>
              <th className="d-none">1</th>
              <th className="CryptocurrenciesList-main-table-type">
                Coin Type
              </th>
              <th>USD</th>
              <th>EURO</th>
            </tr>
            {data.map(eachItem => (
              <CryptocurrencyItem eachValue={eachItem} key={eachItem.id} />
            ))}
          </table>
        </div>
      </>
    )
  }
}
export default CryptocurrenciesList
