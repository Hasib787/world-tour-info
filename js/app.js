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
            <h3 class="country-name">${country.name}</h3>
            <P>${country.capital}</p>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}
