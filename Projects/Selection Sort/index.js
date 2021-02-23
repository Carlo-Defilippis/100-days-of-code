$(document).ready(function () {

    $('.loading').hide()

    let myMainArray = []

    function generateNumbers(k) {
        for (var i = 0; i < k; i++) {
            let number = Math.floor((Math.random() * 100) + 1)
            myMainArray.push(number)
            console.log(number)
        }
    }
    generateNumbers(5)
    console.log(myMainArray)
    $('.myRandomArray').text(myMainArray)

    function swapArrays(a, b, arr) {
        let tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }

    $('.addNumbers').click(function () {
        let number = Math.floor((Math.random() * 100) + 1)
        myMainArray.push(number)
        $('.myRandomArray').text(myMainArray)
        console.log(myMainArray)
    })

    $('.sortArray').click(function () {
        $(".loading").fadeIn(50).fadeOut(2000)
        $('.arraySorted').focus()
        let array = myMainArray
        for (let i = 0; i < array.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[min] > array[j]) min = j;
            }
            swapArrays(i, min, array);
        }
        $('.arraySorted').text(array)
    })


})



