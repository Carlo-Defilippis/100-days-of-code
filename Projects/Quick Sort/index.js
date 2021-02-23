$(document).ready(function () {

    $('.loading').hide()

    let myMainArray = []

    function generateNumbers(k) {
        for (var i = 0; i < k; i++) {
            let number = Math.floor((Math.random() * 100) + 1)
            myMainArray.push(number)
        }
    }

    generateNumbers(5)
    $('.myRandomArray').text(myMainArray)

    function swapArrays(arr, x, y) {
        [arr[x], arr[y]] = [arr[y], arr[x]];
    }

    function pivot(arr, left = 0, right = arr.length - 1) {
        let shift = left;
        for (let i = left + 1; i <= right; i++) {
            // move all the small elements on the left side
            if (arr[i] < arr[left]) swapArrays(arr, i, ++shift);
        }

        // swapping the last element with the left
        swapArrays(arr, left, shift);
        return shift;
    }

    function quickSort(array, left = 0, right = array.length - 1) {
        if (left < right) {
          let pivotIndex = pivot(array, left, right);
      
          // recusrively calling the function to the left of the pivot and to the right of the pivot
          quickSort(array, left, pivotIndex - 1);
          quickSort(array, pivotIndex + 1, right);
        }
        return array;
      }

    $('.addNumbers').click(function () {
        let number = Math.floor((Math.random() * 100) + 1)
        myMainArray.push(number)
        $('.myRandomArray').text(myMainArray)
    })

    $('.sortArray').click(function () {
        $(".loading").fadeIn(50).fadeOut(2000)
        $('.arraySorted').focus()
        let array = myMainArray
        var t0 = performance.now().toFixed(5)
        let answer = quickSort(array)
        var t1 = performance.now().toFixed(5)
        $('.arraySorted').text("Sorting the array took " + (t1 - t0).toFixed(5) + " milliseconds. Sorted Array: " + answer)
    })
})



