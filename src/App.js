// import React, {useEffect, useState} from 'react';
//
// function App (){
//
//     const [isLoaded, setIsLoaded]=useState(false);
//     const [data, setData]=useState([]);
//
//
//     useEffect(() =>{
//     async function fetchData() {
//         const response = await fetch ("https://api.exchangeratesapi.io/latest");
//         const jsonData = await response.json();
//         setData(jsonData);
//         console.log (data)
//         }
//         fetchData()
//         },[]);
//
//
//   // componentDidMount() {
//   //   fetch('https://prime.exchangerate-api.com/v5/4f2c91e9553da2e933e007ea/latest/USD')
//   //       .then(response => response.json())
//   //       .then(data => {
//   //         this.setState({
//   //           isLoaded: true,
//   //           USD: data,
//   //         }) .catch
//   //       });
//   // }
//
//
//     if (!isLoaded) {
//       return <div>loading...</div>;
//     } else {
//       return (
//           <div className="App">
//             <ul>
//               { data === undefined
//               ?
//                   "fetch did not work"
//                 :
//                   data.map(data => (
//                 <li key={data.id}>
//                result: {data.rates}
//                 </li>
//
//               ))}
//             </ul>
//           </div>
//       );
//     }
//
// }
// export default App


import React, { useState, useEffect } from "react";

function App  (){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchData() {
        const response = await fetch('https://api.exchangeratesapi.io/latest');
        const json = await response.json();
        setData(json);
        setLoading(false)
        console.log(json)
    }

    useEffect(() => {
        fetchData()

    }, []);

    return (<div>
        <h1>{data.date}</h1>
    </div>);
};

export default App;