import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://prime.exchangerate-api.com/v5/4f2c91e9553da2e933e007ea/latest/USD')
        .then(response => response.json())
        .then(data => {
          this.setState({
            isLoaded: true,
            USD: data,
          })
        });
  }

  render() {
    console.log()

    var {isLoaded, data} = this.state;
    if (!isLoaded) {
      return <div>loading...</div>;
    } else {
      return (
          <div className="App">
            <ul>
              {data.map(data => (
                <li key={data.id}>
               result: {data.result} | documentation {data.documentation}
                </li>
              ))}
            </ul>
          </div>
      );
    }
  }
}
export default App