

document.querySelector('#city-search').addEventListener('submit', function(event){
    event.preventDefault()
    var city = document.querySelector('#user-supply-city').value

    console.log(city)

    fetch(`https://instagram47.p.rapidapi.com/location_search?search=${city}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "instagram47.p.rapidapi.com",
            "x-rapidapi-key": "90100850f4mshed0f09a102cd133p1e45e7jsnbead281b9e76"
        }
    })
    
    
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data.body);
    })
    .catch(err => {
        console.error(err);
    });
})
