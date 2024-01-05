// filters cities with a population greater than 100000
const filterGreatCity = (data) => data.filter((city) => city.population > 100000);

// filters cities with a population less than 100000
const filterSmallCity = (data) => data.filter((city) => city.population < 100000);

module.exports = {
    filterGreatCity,
    filterSmallCity
}