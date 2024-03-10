import './Country.css'
const Country = ({country}) => {
    console.log(country);
    const {name, flags} = country;
    return (
        <div className='country'>
            <h4>Country : {name?.common}</h4>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;