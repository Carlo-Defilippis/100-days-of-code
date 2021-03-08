$(document).ready(function () {
    $('.popup').hide()


    // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    //     $('.selectpicker').selectpicker('mobile');
    //    } else {
    //     $('.selectpicker').selectpicker();
    //    }

    let mySearches = []
    let myPlatform = []
    let myOrder = []

    // Clears all search options
    $('.clear').click(function () {
        mySearches = []
        myPlatform = []
        myOrder = []
        var elements = document.getElementsByTagName('select');
        for (var i = 0; i < elements.length; i++) {
            elements[i].selectedIndex = 0;
        }
        $('.selectpicker').selectpicker('deselectAll');
    })

    // Gets the value of all the genre and tags the user is searching for
    $('.multiSelect').change(function () {
        var selectedItem = $(this).val();
        if (selectedItem.length > 0) {
            mySearches = selectedItem
            console.log(selectedItem)
        }
    });

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
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".results").offset().top
                }, 2000);
                $('.titleSearch').empty()
                $('.column1').empty()
                $('.column2').empty()
                $('.column3').empty()
                var elements = document.getElementsByTagName('select');
                for (var i = 0; i < elements.length; i++) {
                    elements[i].selectedIndex = 0;
                }
                $('.selectpicker').selectpicker('deselectAll');
                $('.filter-option-inner-inner').empty();
                console.log(mySearches, myPlatform, myOrder)
                $('.titleSearch').text(`
                ${response.length} results found! -- Search tags: ${mySearches} -- Platform: ${myPlatform} -- Sort Order: ${myOrder}
                `)
                let columnNumber = 1
                console.log(response)
                if (response.status === 0) {
                    alert("Sorry, no results. Try to choose less genre's and tags.")
                } else {
                for (var i = 0; i < response.length; i++) {
                    if (columnNumber == 3) {
                        $('.column' + columnNumber).append(`
                        <div class="card mt-2 mb-2">
                            <img src="${response[i].thumbnail}" class="card-img-top" alt="${response[i].title}">
                                <div class="card-body">
                                    <h5 class="card-title text-dark">${response[i].title}</h5>
                                    <p class="card-text text-dark">${response[i].short_description}</p>
                                    <h6 class="card-title text-dark">Platform:</h6>
                                    <p class="card-text text-dark">${response[i].platform}</p>
                                    <h6 class="card-title text-dark">Genre:</h6>
                                    <p class="card-text text-dark">${response[i].genre}</p>
                                    <h6 class="card-title text-dark">Developer:</h6>
                                    <p class="card-text text-dark">${response[i].developer}</p>
                                    <a href="${response[i].game_url}" target="_blank" class="btn btn-primary">Check it out</a>
                                </div>
                            </div>
                        `)
                        columnNumber = 1
                    } else {
                        $('.column' + columnNumber).append(`
                        <div class="card mt-2 mb-2">
                            <img src="${response[i].thumbnail}" class="card-img-top" alt="${response[i].title}">
                                <div class="card-body">
                                    <h5 class="card-title text-dark">${response[i].title}</h5>
                                    <p class="card-text text-dark">${response[i].short_description}</p>
                                    <h6 class="card-title text-dark">Platform:</h6>
                                    <p class="card-text text-dark">${response[i].platform}</p>
                                    <h6 class="card-title text-dark">Genre:</h6>
                                    <p class="card-text text-dark">${response[i].genre}</p>
                                    <h6 class="card-title text-dark">Developer:</h6>
                                    <p class="card-text text-dark">${response[i].developer}</p>
                                    <a href="${response[i].game_url}" target="_blank" class="btn btn-primary">Check it out</a>
                                </div>
                            </div>
                        `)
                        columnNumber++
                    }
                }
            }
                // console.log(response);
                mySearches = []
                myPlatform = []
                myOrder = []
            });
            // Resets all arrays to empty to get ready for new search
        } else {
            // Not all options were filled out so we alert the user
            alert("Please choose a platform and genre before searching.")
        }
    })

})

