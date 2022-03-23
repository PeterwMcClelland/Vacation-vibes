// CORS LINK https://cors-anywhere.herokuapp.com/ 
// API KEY FOR YELP 4ItWiTuukt5tY4_oKe6V7NNYkXmLtFn25s04ZpQSPNCdTR5Sk10SMsfuiUid3WkvwHRkqDy4TjNODHgIQlOSGeJomrpko6l02IhahFWkXUWcMPK8gW9K8v_XDj46YnYx
// CLIENT ID XnayxhvasPdNSTF9OWEgiA

var cityInputEl = document.getElementById("cityName");

var token = "Bearer 4ItWiTuukt5tY4_oKe6V7NNYkXmLtFn25s04ZpQSPNCdTR5Sk10SMsfuiUid3WkvwHRkqDy4TjNODHgIQlOSGeJomrpko6l02IhahFWkXUWcMPK8gW9K8v_XDj46YnYx";

var apiUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search"

var getBusinessesName = {
    "url": apiUrl,
    "data": { term: "restaurants", location: "" },
    headers: { "Authorization": token },
}

document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();
    var cityName = cityInputEl.value.trim();
        getBusinessesName.data.location = cityName;
        $.ajax(getBusinessesName)
            .done(function (response) {
                console.log("typeof response = " + typeof response)
                console.log("response = ", response)

                document.getElementById("activity1Name").textContent = response.businesses[0].name;
                document.getElementById("activity1Pic").setAttribute("src", response.businesses[0].image_url);
                document.getElementById("activity1Address").textContent = response.businesses[0].location.address1;
                document.getElementById("activity1Link").setAttribute("href", response.businesses[0].url);

                document.getElementById("activity2Name").textContent = response.businesses[1].name;
                document.getElementById("activity2Pic").setAttribute("src", response.businesses[1].image_url);
                document.getElementById("activity2Address").textContent = response.businesses[1].location.address1;
                document.getElementById("activity2Link").setAttribute("href", response.businesses[1].url);

                document.getElementById("activity3Name").textContent = response.businesses[2].name;
                document.getElementById("activity3Pic").setAttribute("src", response.businesses[2].image_url);
                document.getElementById("activity3Address").textContent = response.businesses[2].location.address1;
                document.getElementById("activity3Link").setAttribute("href", response.businesses[2].url);
            });
        });
    
// });

// searchFormEl.addEventListener("submit", getBusinessName);


// var getBusinessName = function (event) {
//     event.preventDefault();
//     var cityName = cityInputEl.value.trim();
//     if (cityName) {
//         fetch("https://travel-advisor.p.rapidapi.com/locations/search?query=" + cityInputEl + "&limit=10&offset=0&units=mi&location_id=1&currency=USD&sort=relevance&lang=en_US", {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//                 "x-rapidapi-key": "dbb8ded846msh926033eb734afacp1bde62jsne144dbc578e0"
//             }
//         })
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (response) {
//                 console.log(response)
//                 // document.getElementById("activity1").textContent = "First Activity: " + data.list[0];
//             });

// fetch("https://travel-advisor.p.rapidapi.com/attractions/list?location_id=298571&currency=USD&lang=en_US&lunit=mi&sort=recommended", {
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//         "x-rapidapi-key": "dbb8ded846msh926033eb734afacp1bde62jsne144dbc578e0"
//     }
// })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// var getBusinessName = function (event) {
//     event.preventDefault();
//     var cityName = cityInputEl.value.trim();
//     if (cityName) {
//         //         fetch("https://yelpapiserg-osipchukv1.p.rapidapi.com/getBusinesses", {
//         fetch("https://yelpapiserg-osipchukv1.p.rapidapi.com/getBusinesses", {
//             "method": "POST",
//             "headers": {
//                 "content-type": "application/x-www-form-urlencoded",
//                 "x-rapidapi-host": "YelpAPIserg-osipchukV1.p.rapidapi.com",
//                 "x-rapidapi-key": "dbb8ded846msh926033eb734afacp1bde62jsne144dbc578e0"
//             },
//             "body": {
//                 "locale": "cityInputEl",
//                 "accessToken": "ZDUN7LV6xqnGDvgTOZH5mM5EZe5VQ1xD6JFQIHXn3Hc0jkxnu7QifI8o5wSILzhJHvnoKvU_P7Fxrhqsbk1WSbBiMeMGs0n_8Lst9Y9QKGT3kcYPuHOgX5okrT4xYnYx"
//             }
//         })
//             .then(response => {
//                 console.log(response);
//             })
//             .catch(err => {
//                 console.error(err);
//             })
//     }        
// };

        // $.ajax({
        //     url: apiUrl,
        //     method: "GET",
        //     headers: {
        //       "accept": "application/json",
        //       "x-requested-with": "xmlhttprequest",
        //       "Access-Control-Allow-Origin": "*",
        //       "Authorization": `Bearer $ZDUN7LV6xqnGDvgTOZH5mM5EZe5VQ1xD6JFQIHXn3Hc0jkxnu7QifI8o5wSILzhJHvnoKvU_P7Fxrhqsbk1WSbBiMeMGs0n_8Lst9Y9QKGT3kcYPuHOgX5okrT4xYnYx`
        //     },
        //     data: {
        //       location: cityName
        //     }
        //   })   https://api.yelp.com/v3/businesses/search  ?term= {} ?location= {}

        // var getBusinessName = function (event) {
        //     event.preventDefault();
        //     console.log(event);

        //     var cityName = cityInputEl.value.trim();
        //     if (cityName) {
        //         var apiUrlGeo = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + cityInputEl;
        //         // const response = await fetch(apiUrl, {method: 'GET', mode: 'no-cors', Authorization: "Bearer 4ItWiTuukt5tY4_oKe6V7NNYkXmLtFn25s04ZpQSPNCdTR5Sk10SMsfuiUid3WkvwHRkqDy4TjNODHgIQlOSGeJomrpko6l02IhahFWkXUWcMPK8gW9K8v_XDj46YnYx"})
        //         fetch(apiUrlGeo).then(function (response) {
        //             response.json().then(function (data) {
        //                 console.log(data);
    

        //             })

        //         })
        //     }
        // };

        // btn.addEventListener("click", getBusinessName);