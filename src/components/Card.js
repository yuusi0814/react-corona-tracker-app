const Card = ({ allCountriesData }) => {
  return (
    <div>
      {allCountriesData.map((singleData, index) => (
        <div key={index}>
          <h2>{singleData.Country}</h2>
          <p>新規感染者: {singleData.NewConfirmed}</p>
          <p>感染者総数: {singleData.TotalConfirmed}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
