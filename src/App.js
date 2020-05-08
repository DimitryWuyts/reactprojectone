import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://prime.exchangerate-api.com/v5/4f2c91e9553da2e933e007ea/latest/USD')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        }); 
  }

  render() {
    var {isLoaded, items} = this.state;
    if (!isLoaded) {
      return <div>loading...</div>;
    } else {
      return (
          <div className="App">
            <ul>
              {items.data(item => (
                <li key={item.id}>
               result: {item.result} | documentation {item.documentation}
                </li>
              ))}
            </ul>
          </div>
      );
    }
  }
}
export default App;