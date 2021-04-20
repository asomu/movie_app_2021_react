import propTypes from 'prop-types'
import react from 'react';

class App extends react.Component {
  state = {
    isLoading:true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 3000)
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>{isLoading ? "Loading..." : "We are ready!"} </div>
    )
  }
}

export default App;
