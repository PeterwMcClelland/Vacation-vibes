// https://cors-anywhere.herokuapp.com/  CORS link
// API KEY FOR YELP ZDUN7LV6xqnGDvgTOZH5mM5EZe5VQ1xD6JFQIHXn3Hc0jkxnu7QifI8o5wSILzhJHvnoKvU_P7Fxrhqsbk1WSbBiMeMGs0n_8Lst9Y9QKGT3kcYPuHOgX5okrT4xYnYx
// CLIENT ID XnayxhvasPdNSTF9OWEgiA

var searchFormEl = document.getElementById("searchForm");
var cityInputEl = document.getElementById("cityName");
var cityName = cityInputEl.value.trim();

var getBusinessName = function (event) {
    event.preventDefault();
    var cityName = cityInputEl.value.trim();
    if (cityName) {
        // var apiUrl = "https://api.yelp.com/v3/businesses/search?location=" + cityName;
        fetch("http://api.yelp.com/v3/businesses/search?location=" + cityName,
            { method: 'GET', mode: 'no-cors', Authorization: 'Bearer ZDUN7LV6xqnGDvgTOZH5mM5EZe5VQ1xD6JFQIHXn3Hc0jkxnu7QifI8o5wSILzhJHvnoKvU_P7Fxrhqsbk1WSbBiMeMGs0n_8Lst9Y9QKGT3kcYPuHOgX5okrT4xYnYx' })
            .then(function (response) {
                return response.json();
            }).then(function (response) {
                console.log(response)
            });
        // fetch(apiUrl, { method: 'GET', mode: 'no-cors' }).then(function (response) {
        //     return response.json();
        // }).then(function (response) {
        //     console.log(response)
        // });

    }
};

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
    //   })

    // var getBusinessName = function (event) {
    //     event.preventDefault();
    //     console.log(event);

    //     var cityName = cityInputEl.value.trim();
    //     if (cityName) {
    //         var apiUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + cityInputEl + "&appkey=ZDUN7LV6xqnGDvgTOZH5mM5EZe5VQ1xD6JFQIHXn3Hc0jkxnu7QifI8o5wSILzhJHvnoKvU_P7Fxrhqsbk1WSbBiMeMGs0n_8Lst9Y9QKGT3kcYPuHOgX5okrT4xYnYx";
    //         // const response = await fetch(apiUrl, {method: 'GET', mode: 'no-cors'})    
    //         fetch(apiUrlGeo).then(function (response) {
    //             response.json().then(function (data) {
    //                 console.log(data);
    //                 // document.getElementById("dayOneUV").textContent = 

    //             })

    //         })
    //     }
    // };

    // // var myurl = "https://api.yelp.com/v3/businesses/search?location=";

    // // $.ajax({
    // //    url: myurl + cityInput,
    // //    headers: {
    // //     'Authorization':'Bearer ZDUN7LV6xqnGDvgTOZH5mM5EZe5VQ1xD6JFQIHXn3Hc0jkxnu7QifI8o5wSILzhJHvnoKvU_P7Fxrhqsbk1WSbBiMeMGs0n_8Lst9Y9QKGT3kcYPuHOgX5okrT4xYnYx',
    // // },
    // //    method: 'GET',
    // //    dataType: 'json',
    // //    success: function(data){
    // //        // Grab the results from the API JSON return
    // //        var totalresults = data.total;
    // //        // If our results are greater than 0, continue
    // //        if (totalresults > 0){
    // //            // Display a header on the page with the number of results
    // //            $('#results').append('<h5>We discovered ' + totalresults + ' results!</h5>');
    // //            // Itirate through the JSON array of 'businesses' which was returned by the API
    // //            $.each(data.businesses, function(i, item) {
    // //                // Store each business's object in a variable
    // //                var id = item.id;
    // //                var alias = item.alias;
    // //                var phone = item.display_phone;
    // //                var image = item.image_url;
    // //                var name = item.name;
    // //                var rating = item.rating;
    // //                var reviewcount = item.review_count;
    // //                var address = item.location.address1;
    // //                var city = item.location.city;
    // //             //    var state = item.location.state;
    // //             //    var zipcode = item.location.zip_code;
    // //                // Append our result into our page
    // //                $('#results').append('<div id="' + id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + '" style="width:200px;height:150px;"><br>We found <b>' + name + '</b> (' + alias + ')<br>Business ID: ' + id + '<br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews.</div>');
    // //          });
    // //        } else {
    // //            // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
    // //            $('#results').append('<h5>We discovered no results!</h5>');
    // //        }
    // //    }
    // // });     

    searchFormEl.addEventListener("submit", getBusinessName);