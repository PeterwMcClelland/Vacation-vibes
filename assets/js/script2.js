// CORS LINK https://cors-anywhere.herokuapp.com/ 
// API KEY FOR YELP 4ItWiTuukt5tY4_oKe6V7NNYkXmLtFn25s04ZpQSPNCdTR5Sk10SMsfuiUid3WkvwHRkqDy4TjNODHgIQlOSGeJomrpko6l02IhahFWkXUWcMPK8gW9K8v_XDj46YnYx
// CLIENT ID XnayxhvasPdNSTF9OWEgiA

var cityInputEl = document.getElementById("cityName");
var activites = document.getElementById("activites");

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
                activites.classList.remove("hide");
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