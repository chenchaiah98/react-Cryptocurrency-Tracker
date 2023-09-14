// Write your code here
import {Component} from 'react'
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptoCurrencyTracker extends Component {
  state = {isLoading: true}

  componentDidMount() {
    this.setState({isLoading: false})
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="cryptoCurrencyTracker-main-bg-container">
        {isLoading ? <h1>loading ...</h1> : <CryptocurrenciesList />}
      </div>
    )
  }
}
export default CryptoCurrencyTracker
