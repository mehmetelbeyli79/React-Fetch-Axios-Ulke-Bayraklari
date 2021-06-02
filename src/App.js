import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [countries, setCountries] = useState([]);

  // useEffect(()=>{
  //   fetch("https://restcountries.eu/rest/v2/all")
  //   .then((response)=>response.json())
  //   .then((response)=>setCountries(response))
  // },[]);

  useEffect(() => {
    axios("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);

  //console.log("COUNTRIES:",countries);

  return (
    <div className="App">
      <h1>React Fetch</h1>
      <h2>Fetch ve Axios Kullanımı</h2>
      {countries.map((country) => {
        return (
          <div key={country.name}>
            <h3>{country.name}</h3>
            <h3>{country.capital}</h3>
            <img src={country.flag} alt={country.name} style={{ width: 100 }} />
            <hr />
          </div>
        );
      })}
    </div>
  );
}
