import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    // console.log(countries);
    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            {
                countries.map(country => <Country key={country.car.cca3} country = {country}></Country>)
            }
        </div>
    );
};

export default Countries;