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
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
            <h3  class="country-name">${country.name}</h3>
            <P>${country.capital}</p>
            <button onclick="displayCountriesDetail('${country.name}')">Submit</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);

    });
}

const displayCountriesDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}">
    `
}

