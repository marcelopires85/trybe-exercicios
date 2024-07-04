const dataCountries = require("./data.json");

const getCountriesByRegion = (data, region) => {
  const filterCountries = [];

  for (let index = 0; index < data.length; index += 1) {
    const langNames = [];
    for (
      let indexLang = 0;
      indexLang < data[index].languages.length;
      indexLang += 1
    ) {
      langNames.push(data[index].languages[indexLang].name);
    }

    if (data[index].region === region) {
      filterCountries.push({
        countryName: data[index].name,
        population: data[index].population,
        languages: langNames,
      });
    }
  }

  return filterCountries;
};

console.log(getCountriesByRegion(dataCountries, "Americas"));
