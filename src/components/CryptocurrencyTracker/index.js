// Write your code here
import {Component} from 'react'
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptoCurrencyTracker extends Component {
  render() {
    return (
      <div className="cryptoCurrencyTracker-main-bg-container">
        <CryptocurrenciesList />
      </div>
    )
  }
}
export default CryptoCurrencyTracker
