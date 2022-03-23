let cityFormEl = document.querySelector(".city-form")
let cityInputEl = document.querySelector("#cityName")
let cityName;

let submitHandler = function (event) {
  cityName = cityInputEl.value
  if (cityName) {
    saveCity(cityName);
    cityCoordinates(cityName);
  }
}

let saveCity = function (cityName) {
  let cityNames = JSON.parse(localStorage.getItem('cityNames'));
  console.log(cityNames.indexOf('austin'));
  if (cityNames.indexOf(cityName) === -1) {
    cityNames.push(cityName);
    localStorage.setItem('cityNames', JSON.stringify(cityNames));
    updateSavedCities();
  }
}

let savedCityInput = function (cityName) {
  let divEl = document.createElement("div")
  divEl.setAttribute("class", "storage-cities")
  let btnEl = document.createElement("button");
  btnEl.setAttribute("class", "button is-fullwidth button is-info saved-city");
  divEl.appendChild(btnEl)
  let cityListEl = document.querySelector(".city-info")
  cityListEl.appendChild(divEl);
  btnEl.textContent = cityName;
}

let updateSavedCities = function () {
  if (localStorage.getItem('cityNames') === null) {
    localStorage.setItem('cityNames', '[]');
  }
  let cityNames = JSON.parse(localStorage.getItem('cityNames'))
  for (let i = 0; i < cityNames.length; i++) {
    savedCityInput(cityNames[i]);
  }
}
updateSavedCities();

// let cityCoordinates = function (cityName) {
//   let apiUrl = 'https://wft-geo-db.p.rapidapi.com' + cityName + '&appid=2d908fc629msh2bb79c2d2cf6797p195b82jsnb2d824400456'
//   fetch(apiUrl).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         console.log(data);
//       })
//     }
//   })
// }


// cityFormEl.addEventListener("submit", submitHandler);

// // fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
// // 	.then(response => response.json())
// // 	.then(response => console.log(response))
// // 	.catch(err => console.error(err));