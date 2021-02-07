const loadData = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await response.json();
    return data;
}
loadData().then(countries => {
    displayCountries(countries);
});

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    const allCountry = countries.map(country => country.name);
    const allCapital = countries.map(capital => capital.capital)
    const countryDiv= document.createElement('div');
    const countryName= document.createElement('h3');
    countryName.innerText=allCountry;
    const capitalName = document.createElement('p');
    capitalName.innerText= allCapital;
    countryDiv.appendChild(countryName);
    countryDiv.appendChild(capitalName);
    countriesDiv.appendChild(countryDiv);


    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     console.log(country.name); 
    // }
}
