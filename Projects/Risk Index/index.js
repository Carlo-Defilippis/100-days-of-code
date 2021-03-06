$(document).ready(function () {


    $('.reload').click(function() {
        location.reload();
    })

    $('.checkButton').click(function() {
        $('.oneMonth').focus()
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://fear-and-greed-index.p.rapidapi.com/v1/fgi",
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7bdb4eda7amsh95a13fc78c869e1p1a5fe1jsna086c268c24f",
                "x-rapidapi-host": "fear-and-greed-index.p.rapidapi.com"
            }
        };

        function checkLevel(val) {
            if (val == "Neutral") {
                return 'middle'
            } else if (val == "Extreme Fear") {
                return 'rischio4'
            } else if (val == "Greed") {
                return 'rischio2'
            } else if (val == "Extreme Greed") {
                return 'rischio1'
            } else if (val == "Fear") {
                return 'rischio3'
            }
        }

        $.ajax(settings).done(function (response) {
            let now = response.fgi.now.valueText
            let oneMonthAgo = response.fgi.oneMonthAgo.valueText
            let oneWeekAgo = response.fgi.oneWeekAgo.valueText
            let oneYearAgo = response.fgi.oneYearAgo.valueText

            $('.now').addClass(checkLevel(now))
            $('.number1').text(now)
            $('.oneWeek').addClass(checkLevel(oneWeekAgo))
            $('.number2').text(oneWeekAgo)
            $('.oneMonth').addClass(checkLevel(oneMonthAgo))
            $('.number3').text(oneMonthAgo)
            $('.oneYear').addClass(checkLevel(oneYearAgo))
            $('.number4').text(oneYearAgo)

            console.log(response.fgi.now.valueText);
            console.log(response.fgi.oneMonthAgo.valueText);
            console.log(response.fgi.oneWeekAgo.valueText);
            console.log(response.fgi.oneYearAgo.valueText);
        });
    })

})