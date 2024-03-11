import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    // console.log(countries);
    // console.log(visitedCountries)
    const handleVisitedCountries = (country)=>{
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
        console.log(visitedCountries)
    }
    const handleVisitedFlags = (flag)=>{
        // console.log('clicked flag');
        const newFlags = [...visitedFlags, flag];
        setVisitedFlags(newFlags);
    }
    return (
        <div>
        
            <h2>Countries : {countries.length}</h2>
            {/* visited countris */}
            <div>
                <h3>Visited Countries : {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* visited flags */}
            <div className="flag">
                <h4>Visited Countries - </h4>
                {
                    visitedFlags.map((flag, idx) => <img src={flag} key={idx}></img>)
                }
            </div>
            {/* display country */}
            <div className="country-container">
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    country = {country} 
                    visitedFunc = {handleVisitedCountries}
                    handleVisitedFlags = {handleVisitedFlags}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;