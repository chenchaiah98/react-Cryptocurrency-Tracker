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
        <h1 className="CryptocurrenciesList-main-heading">
          Cryptocurrency Tracker
        </h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
        </div>
        <div>
          <div className="CryptocurrenciesList-main-table ">
            <div className="CryptocurrenciesList-main-table-item table-heading">
              <div className="CryptocurrenciesList-main-table-type">
                <p>Coin Type</p>
              </div>
              <div>
                <p>USD</p>
              </div>
              <div>
                <p>EURO</p>
              </div>
            </div>
            {data.map(eachItem => (
              <CryptocurrencyItem eachValue={eachItem} key={eachItem.id} />
            ))}
          </div>
        </div>
      </>
    )
  }
}
export default CryptocurrenciesList
