import { useState } from 'react';
import './Country.css'
const Country = ({country, visitedFunc, handleVisitedFlags}) => {
    // console.log(country);
    // console.log(visitedFunc);
    const {name, flags, population, cca2} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    return (
        <div className={`county ${visited? 'visited': 'going'}`}>
            <h4>Country : {name?.common}</h4>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
            <p>Country code : {cca2}</p>
            <button onClick={()=> visitedFunc(country)}>Mark As Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add flag as Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited': 'Visit'}</button>
            {/* {visited ? 'I have visited': 'I want to visit'} */}
        </div>
    );
};

export default Country;