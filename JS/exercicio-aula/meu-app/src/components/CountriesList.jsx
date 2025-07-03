// import React from "react";
// import CountryCardWithClass from "./CountryCardWithClass";

// function CountriesList() {
//   const countries = [
//     {
//       name: {
//         common: "Brazil",
//         official: "Federative Republic of Brazil",
//       },
//       capital: ["Brasília"],
//       region: "Americas",
//       population: 212559409,
//       flags: { png: "https://flagcdn.com/w320/br.png" },
//       cca3: "BRA",
//     },
//     {
//       name: { common: "France", official: "French Republic" },
//       capital: ["Paris"],
//       region: "Europe",
//       population: 67391582,
//       flags: { png: "https://flagcdn.com/w320/fr.png" },
//       cca3: "FRA",
//     },
//     {
//       name: { common: "Japan", official: "Japan" },
//       capital: ["Tokyo"],
//       region: "Asia",
//       population: 125960000,
//       flags: { png: "https://flagcdn.com/w320/jp.png" },
//       cca3: "JPN",
//     },
//     {
//       name: {
//         common: "Nigeria",
//         official: "Federal Republic of Nigeria",
//       },
//       capital: ["Abuja"],
//       region: "Africa",
//       population: 206139587,
//       flags: { png: "https://flagcdn.com/w320/ng.png" },
//       cca3: "NGA",
//     },
//   ];

//   const CountriesList = countries.map((country) => {
//     return (
//       <CountryCardWithClass
//         key={country.cca3}
//         image={country.flags.png}
//         imageAlt={country.name.official}
//         nome={country.name.common}
//         capital={country.capital}
//         region={country.region}
//         population={country.population}
//       />
//     );
//   });

//   return <div>{CountriesList}</div>;
// }

// export default CountriesList;
