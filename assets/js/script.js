let cityFormEl = document.querySelector(".city-form")
let cityInputEl = document.querySelector("#cityName")
let cityName;

let submitHandler = function (event) {
  event.preventDefault();
  cityName = cityInputEl.value
  if (cityName) {
    saveCity(cityName);
    cityInfo(cityName);
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

let cityInfo = function (cityName) {
  let apiUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?countryIds=US&namePrefix=' + cityName;
  fetch(apiUrl, {
    headers: {
      'X-RapidAPI-Key': '2d908fc629msh2bb79c2d2cf6797p195b82jsnb2d824400456'
    }
  }).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        cityUpdates(data.data[0]);
      })
    }
  })
}

let cityUpdates = function (currentCity) {
  let h1El = document.createElement("h1");
  h1El.setAttribute("class", "city-info-heading")
  h1El.textContent = cityName + ' ' + ' ' + "details"
  let divEl = document.createElement("div");
  divEl.setAttribute("class", "city-info-details")
  let p1El = document.createElement("p");
  p1El.textContent = "Country :" + currentCity.country
  let p2El = document.createElement("p");
  p2El.textContent = "Population :" + currentCity.population
  let p3El = document.createElement("p");
  p3El.textContent = "State :" + currentCity.region
  divEl.appendChild(p1El);
  divEl.appendChild(p2El);
  divEl.appendChild(p3El);
  let cityInformation = document.querySelector(".people-photos");
  cityInformation.appendChild(h1El);
  cityInformation.appendChild(divEl);
}

cityFormEl.addEventListener("submit", submitHandler);

