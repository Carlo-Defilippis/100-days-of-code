$(document).ready(function () {

    var simon1 = new Audio('./sounds/simonSound1.mp3')
    simon1.volume = 0.02;
    var simon2 = new Audio('./sounds/simonSound2.mp3')
    simon2.volume = 0.02;
    var simon3 = new Audio('./sounds/simonSound3.mp3')
    simon3.volume = 0.02;
    var simon4 = new Audio('./sounds/simonSound4.mp3')
    simon4.volume = 0.02;
    var fail = new Audio('./sounds/fail.wav')
    fail.volume = 0.02;

    $('.simonStart').prop('disabled', false)
    $('.simonStart').text('Click to start')

    var buttons = {
    1: function () {
            $(".blue").fadeOut(50).fadeIn(800)
            simon1.play()
    },
    2: function() {
            $(".green").fadeOut(50).fadeIn(800)
            simon2.play()
    },
    3: function() {
            $(".red").fadeOut(50).fadeIn(800)
            simon3.play()
    },
    4: function() {
            $(".yellow").fadeOut(50).fadeIn(800)
            simon4.play()
    }
}

    var computersArray = []
    var turns = 1
    var isDone = true
    var myCounter = 0

    $('.simonStart').click(function() {
            
            var interval = setInterval(function () {
                $(".simonStart").text('Computers Turn')
                $('.simonStart').prop('disabled', true)
                if (computersArray.length === 0) {                
                    var myRand = Math.floor(Math.random() * 4) + 1
                    buttons[myRand]()
                    computersArray.push(myRand)
                    isDone = false
                    console.log(isDone)
                    myCounter++
                } else if (computersArray.length != myCounter) {
                    buttons[computersArray[myCounter]]()
                    myCounter++
                }
                else if (isDone) {                
                    var myRand = Math.floor(Math.random() * 4) + 1
                    buttons[myRand]()
                    computersArray.push(myRand)
                    isDone = false
                    myCounter++
                } else {
                    $('.simon').prop('disabled', false)
                    $('.simonStart').prop('disabled', true)
                    $('.simonStart').text('Your turn!')
                    myCounter = 0
                    isDone = true
                    clearInterval(interval);
                }
            }, 1000);
    })

    var playerIndex = 0

    $('.simon').click(function() {
        var btnVal = $(this).val()
        if (playerIndex + 1 !== computersArray.length) {
        if (btnVal == computersArray[playerIndex]) {
            playerIndex++
            buttons[btnVal]()
        } else {
            fail.play()
            $('.simonStart').prop('disabled', false)
            $('.simonStart').text('You lost! Try again?')
            $('.simon').prop('disabled', true)
            playerIndex = 0
            turns = 1
            computersArray = []
        }
    } else if ((btnVal != computersArray[playerIndex])) {
        fail.play()
        $('.simonStart').prop('disabled', false)
        $('.simonStart').text('You lost! Try again?')
        $('.simon').prop('disabled', true)
        playerIndex = 0
        turns = 1
        computersArray = []
    } 
    else {
        buttons[btnVal]()
        $('.simonStart').prop('disabled', false)
        $('.simonStart').text('** Computers turn! Click here to watch **')
        $('.simon').prop('disabled', true)
        playerIndex = 0
    }
    })

})