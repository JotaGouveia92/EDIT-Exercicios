const countries = [
  {
    name: { common: "Brazil", official: "Federative Republic of Brazil" },
    capital: ["Brasília"],
    region: "Americas",
    population: 212559409,
    flags: { png: "https://flagcdn.com/w320/br.png" },
    cca3: "BRA",
  },
  {
    name: { common: "France", official: "French Republic" },
    capital: ["Paris"],
    region: "Europe",
    population: 67391582,
    flags: { png: "https://flagcdn.com/w320/fr.png" },
    cca3: "FRA",
  },
  {
    name: { common: "Japan", official: "Japan" },
    capital: ["Tokyo"],
    region: "Asia",
    population: 125960000,
    flags: { png: "https://flagcdn.com/w320/jp.png" },
    cca3: "JPN",
  },
  {
    name: { common: "Nigeria", official: "Federal Republic of Nigeria" },
    capital: ["Abuja"],
    region: "Africa",
    population: 206139587,
    flags: { png: "https://flagcdn.com/w320/ng.png" },
    cca3: "NGA",
  },
];

const container = document.getElementById("countries-container");

countries.forEach((country) => {
  const countryDiv = document.createElement("div");
  countryDiv.classList.add("country");

  countryDiv.innerHTML = `
        <img src="${country.flags.png}" alt="Flag of ${
    country.name.common
  }" class="flag" />
        <div class="info">
          <strong>${country.name.common}</strong>
          <span>Capital: ${country.capital.join(", ")}</span>
          <span>Região: ${country.region}</span>

          ${
            country.region != "Europe"
              ? `<span>
                População: ${country.population.toLocaleString("en-US")} 
              </span>` //transformar o numero com virgulas
              : ""
          }

        </div>
      `;
  console.log(country.population, country.population.toLocaleString("en-US"));

  container.appendChild(countryDiv);
});
