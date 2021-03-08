$(document).ready(function () {
    $('.popup').hide()



    let mySearches = []
    let myPlatform = []
    let myOrder = []

    // Clears all search options
    $('.clear').click(function () {
        $('.searches').empty()
        mySearches = []
        myPlatform = []
        myOrder = []
        $('.selectOrder').val('default')
        $('.selectPlatform').val('default')
    })
    // Makes a list for the user to see all the genres sleected visually
    $('.dropdown-item').click(function () {
        let cat = $(this).text()
        mySearches.push(cat)
        $(".searches").append('<li class="list-group-item bg-secondary">' + cat + '</li>');
    })

    // Give the platform selection, since it can only be one phrase, we empty the array before setting it
    $('.selectPlatform').click(function () {
        let plat = $(this).val()
        myPlatform = []
        myPlatform.push(plat)
    })

    // Give the sort order, since it can only be one phrase, we empty the array before setting it
    $('.selectOrder').click(function () {
        let order = $(this).val()
        myOrder = []
        myOrder.push(order)
    })

    $('.convert').click(function () {
        $('.searches').empty()
        let finalSearch = mySearches.join('.')

        // Making the api call and inserting the search terms
        if (myPlatform.length > 0 && myOrder.length > 0 && mySearches.length > 0) {
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=" + finalSearch + "&platform=" + myPlatform + "&sort-by=" + myOrder,
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "7bdb4eda7amsh95a13fc78c869e1p1a5fe1jsna086c268c24f",
                    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
                }
            };
            // Getting a response, then appending the results to the html
            $.ajax(settings).done(function (response) {
                $('.column1').empty()
                $('.column2').empty()
                $('.column3').empty()
                $('.selectOrder').val('default')
                $('.selectPlatform').val('default')
                let columnNumber = 1
                for (var i = 0; i < response.length; i++) {
                    if (columnNumber == 3) {
                        $('.column' + columnNumber).append(`
                        <div class="card mt-2 mb-2" style="width: '60%';">
                            <img src="${response[i].thumbnail}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title text-dark">${response[i].title}</h5>
                                    <p class="card-text text-dark">${response[i].short_description}</p>
                                    <h6 class="card-title text-dark">Platform</h6>
                                    <p class="card-text text-dark">${response[i].platform}</p>
                                    <h6 class="card-title text-dark">Genre</h6>
                                    <p class="card-text text-dark">${response[i].genre}</p>
                                    <h6 class="card-title text-dark">Developer</h6>
                                    <p class="card-text text-dark">${response[i].developer}</p>
                                    <a href="${response[i].game_url}" target="_blank" class="btn btn-primary">Check it out</a>
                                </div>
                            </div>
                        `)
                    columnNumber = 1
                    } else {
                        $('.column' + columnNumber).append(`
                        <div class="card mt-2 mb-2" style="width: '60%';">
                            <img src="${response[i].thumbnail}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title text-dark">${response[i].title}</h5>
                                    <p class="card-text text-dark">${response[i].short_description}</p>
                                    <h6 class="card-title text-dark">Platform</h6>
                                    <p class="card-text text-dark">${response[i].platform}</p>
                                    <h6 class="card-title text-dark">Genre</h6>
                                    <p class="card-text text-dark">${response[i].genre}</p>
                                    <h6 class="card-title text-dark">Developer</h6>
                                    <p class="card-text text-dark">${response[i].developer}</p>
                                    <a href="${response[i].game_url}" target="_blank" class="btn btn-primary">Check it out</a>
                                </div>
                            </div>
                        `)
                    columnNumber++
                    }
                }
                // console.log(response);
            });
            // Resets all arrays to empty to get ready for new search
            mySearches = []
            myPlatform = []
            myOrder = []
        } else {
            // Not all options were filled out so we alert the user
            alert("Please choose a platform and genre before searching.")
        }
    })

})

