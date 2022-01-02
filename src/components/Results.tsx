type ResultsPropsType = {
    results:{
        country:string;
        cityName:string;
        temperature:string;
        conditionText:string;
        icon:string;
    }
}

const Results = (props:ResultsPropsType) => {
    const { cityName, country, temperature, conditionText, icon } = props.results;
    return (
        <>
            {cityName && <div className="results-city">{cityName}</div>}
            {country && <div className="results-country">{country}</div>}
            {temperature && <div className="restults-temp">{temperature}<span>℃</span></div>}
            {conditionText && 
                <div className="results-condition">
                    <img src={icon} alt='icon'/>
                    <span>{conditionText}</span>
                </div>}
        </>
    );
};

export default Results;