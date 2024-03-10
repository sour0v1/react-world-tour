import './Country.css'
const Country = ({country}) => {
    console.log(country);
    const {name, flags, population} = country;
    return (
        <div className='country'>
            <h4>Country : {name?.common}</h4>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
        </div>
    );
};

export default Country;