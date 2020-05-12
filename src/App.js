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
        <table>
            <tr>
                <th>Currency</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>CAD :</td>
                <td>{data.rates && data.rates.CAD}</td>
            </tr>
            <tr>
                <td>HKD :</td>
                <td>{data.rates && data.rates.HKD}</td>
            </tr>
            <tr>
                <td>ISK :</td>
                <td>{data.rates && data.rates.ISK}</td>
            </tr>
            <tr>
                <td>PHP :</td>
                <td>{data.rates && data.rates.PHP}</td>
            </tr>
            <tr>
                <td>DKK :</td>
                <td>{data.rates && data.rates.DKK}</td>
            </tr>
            <tr>
                <td>HUF :</td>
                <td>{data.rates && data.rates.HUF}</td>
                </tr>
                <tr>
                    <td>CZK :</td>
                    <td>{data.rates && data.rates.CZK}</td>
                </tr>
                <tr>
                    <td>AUD :</td>
                    <td>{data.rates && data.rates.AUD}</td>
                </tr>
                <tr>
                    <td>RON :</td>
                    <td>{data.rates && data.rates.RON}</td>
                </tr>
                <tr>
                    <td>SEK :</td>
                    <td>{data.rates && data.rates.SEK}</td>
                </tr>
                <tr>
                    <td>IDR :</td>
                    <td>{data.rates && data.rates.IDR}</td>
                </tr>
                <tr>
                    <td>INR :</td>
                    <td>{data.rates && data.rates.INR}</td>
                </tr>
                <tr>
                    <td>BRL :</td>
                    <td>{data.rates && data.rates.BRL}</td>
                </tr>
                <tr>
                    <td>RUB :</td>
                    <td>{data.rates && data.rates.RUB}</td>
                </tr>
                <tr>
                    <td>HRK :</td>
                    <td>{data.rates && data.rates.HRK}</td>
                </tr>
            <tr>
                <td>JPY :</td>
                <td>{data.rates && data.rates.JPY}</td>
            </tr>
                <tr>
                    <td>THB :</td>
                    <td>{data.rates && data.rates.THB}</td>
                </tr>
                <tr>
                    <td>CHF :</td>
                    <td>{data.rates && data.rates.CHF}</td>
                </tr>
                <tr>
                    <td>SGD :</td>
                    <td>{data.rates && data.rates.SGD}</td>
                </tr>
                <tr>
                    <td>PLN :</td>
                    <td>{data.rates && data.rates.PLN}</td>
                </tr>
            <tr>
                <td>BGN :</td>
                <td>{data.rates && data.rates.BGN}</td>
            </tr>
                <tr>
                    <td>TRY :</td>
                    <td>{data.rates && data.rates.TRY}</td>
                </tr>
                <tr>
                    <td>CNY : </td>
                    <td>{data.rates && data.rates.CNY}</td>
                </tr>
                <tr>
                    <td>NOK :</td>
                    <td>{data.rates && data.rates.NOK}</td>
                </tr>
                <tr>
                    <td>NZD :</td>
                    <td>{data.rates && data.rates.NZD}</td>
                </tr>
            <tr>
                <td>ZAR :</td>
                <td>{data.rates && data.rates.ZAR}</td>
            </tr>
            <tr>
                <td>USD :</td>
                <td>{data.rates && data.rates.USD}</td>
            </tr>
            <tr>
                <td>MXN :</td>
                <td>{data.rates && data.rates.MXN}</td>
            </tr>
            <tr>
                <td>ILS :</td>
                <td>{data.rates && data.rates.ILS}</td>
            </tr>
            <tr>
                <td>GBP :</td>
                <td>{data.rates && data.rates.GBP}</td>
            </tr>
            <tr>
                <td>KRW :</td>
                <td>{data.rates && data.rates.KRW}</td>
            </tr>
            <tr>
                <td>MYR :</td>
               <td>{data.rates && data.rates.MYR}</td>
            </tr>


        </table>
    </div>);
};

export default App;