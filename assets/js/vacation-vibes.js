

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
		'X-RapidAPI-Key': '90100850f4mshed0f09a102cd133p1e45e7jsnbead281b9e76'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities?location=30.266666-97.73', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err))

        .then(data => {
            console.log(data.body.links)
        })
            



        // .then(response => {
            //     return response.json()
            // })
            // .then(data => {
            //     console.log(data.body.id)
            // })
            // .catch(err => {
            //      console.error(err)
            // })
            