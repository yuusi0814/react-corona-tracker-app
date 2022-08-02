const Selector = (props) => {
  return (
    <div>
      <select onChange={(e) => props.setCountry(e.target.value)}>
        <option>Select A Country</option>
        {props.countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>
            {index}
            {country.Country}
          </option>
        ))}
      </select>
      <button onClick={props.getCountryData()}>Get Data</button>
    </div>
  );
};

export default Selector;
