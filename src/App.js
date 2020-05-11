import React, {useEffect, useState} from 'react';

function App (){

    const [isLoaded, setIsLoaded]=useState(false);
    const [data, setData]=useState([]);


    useEffect(() =>{
    async function fetchData() {
        const response = await fetch ("https://api.exchangeratesapi.io/latest");
        setIsLoaded (true);
        const fetchData = await response.json();
        }
        setData(fetchData);
        },[]);
        console.log (data)

  // componentDidMount() {
  //   fetch('https://prime.exchangerate-api.com/v5/4f2c91e9553da2e933e007ea/latest/USD')
  //       .then(response => response.json())
  //       .then(data => {
  //         this.setState({
  //           isLoaded: true,
  //           USD: data,
  //         }) .catch
  //       });
  // }


    if (!isLoaded) {
      return <div>loading...</div>;
    } else {
      return (
          <div className="App">
            <ul>
              { data.rates === undefined
              ?
                  "fetch did not work"
                :
                  data.map(data => (
                <li key={data.id}>
               result: {data.rates}
                </li>

              ))}
            </ul>
          </div>
      );
    }

}
export default App