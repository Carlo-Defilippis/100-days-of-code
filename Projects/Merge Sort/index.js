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



// merger function, which merges 2 sorted array into 1 sorted array
function merger(arr1, arr2) {
    let i = 0,
      j = 0,
      mergedArr = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++]);
      else mergedArr.push(arr1[i++]);
    }
    while (i < arr1.length) {
      mergedArr.push(arr1[i++]);
    }
    while (j < arr2.length) {
      mergedArr.push(arr2[j++]);
    }
    return mergedArr;
  }
  function mergeSort(array) {
    // array of length 1 is sorted so we return the same array back
    if (array.length == 1) return array;
  
    // break down the array to half from middle into left and right
    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));
  
    // return the merged sorted array
    return merger(left, right);
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
        var t0 = performance.now().toFixed(5) * 5
        let answer = mergeSort(array)
        var t1 = performance.now().toFixed(5) * 5
        $('.arraySorted').text("Sorting the array took " + (t1 - t0).toFixed(3) + " milliseconds. Sorted Array: " + answer)
    })
})



