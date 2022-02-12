const loadData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
}
loadData().then(countries => {
    displayCountries(countries);
});

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
            <h3  class="country-name">${country.name.common}</h3>
            <P>${country.capital}</p>
            <button onclick="displayCountriesDetail('${country.name.common}')">Submit</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
// console.log("country", country.flags.png);
    });
}

const displayCountriesDetail = name => {
    const url = `https://restcountries.eu/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>${country.name.common}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flags.png}">
    `
}

console.log(country.flags.png)
