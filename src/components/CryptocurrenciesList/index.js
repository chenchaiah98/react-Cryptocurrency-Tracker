// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {data: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const fetchData = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responce = await fetchData
    const apiData = await responce.json()

    this.setState({data: apiData, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
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
                <ul>
                  {data.map(eachItem => (
                    <CryptocurrencyItem
                      eachValue={eachItem}
                      key={eachItem.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </>
    )
  }
}
export default CryptocurrenciesList
