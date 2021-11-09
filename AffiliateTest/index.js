$(document).ready(function () {
  $(".rec-action").hide()

  // $('.hidden-xs').hide()

  // $('.hidden-sm').hide()

  // let myAffiliates = []

  // let myNames = $('.link-is-positive').text();

  // let summary = $('.summary-text').html()

  // console.log(myNames, summary)

  let myList = []

  $(".card-content").each(function () {
    let data = {}
    let name = $(this).find('a[class|="ng-tns"]').text()
    let company = $(this).find('p[class|="ng-tns"]:eq(2)').text()
    let summary = $(this).find(".is-truncated-2").text()
    let cleanNameOne = name.replace(/[^\n\w\s\s+]/gi, "").trim()
    let cleanName = cleanNameOne.replace(/\s\s+/g, " ")
    let cleanCompanyOne = company.replace(/[^\n\w\s+]/gi, "").trim()
    let cleanCompany = cleanCompanyOne.replace(/\s\s+/g, " ")
    let cleanSummaryOne = summary.replace(/[^\n\w\s+]/gi, "").trim()
    let cleanSummary = cleanSummaryOne.replace(/\s\s+/g, " ")

    data.Name = cleanName
    data.Company = cleanCompany
    data.Summary = cleanSummary
    myList.push(data)
    // console.log( $(this).text() ); //or $(this).text();
    console.log($(this).find('p[class|="ng-tns"]:eq(3)').text())
  })
  console.log("My list", myList)


  function export2txt(originalData) {

  
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)], {
      type: "text/plain"
    }));
    a.setAttribute("download", "data.txt");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

export2txt(myList)
  // $('.loading').hide()

  // let myMainArray = []

  // function generateNumbers(k) {
  //   for (var i = 0; i < k; i++) {
  //     let number = Math.floor((Math.random() * 100) + 1)
  //     myMainArray.push(number)
  //   }
  // }
  // generateNumbers(5)
  // $('.myRandomArray').text(myMainArray)

  // function swapArrays(a, b, arr) {
  //   let tmp = arr[a];
  //   arr[a] = arr[b];
  //   arr[b] = tmp;
  // }

  // $('.addNumbers').click(function () {
  //   let number = Math.floor((Math.random() * 100) + 1)
  //   myMainArray.push(number)
  //   $('.myRandomArray').text(myMainArray)
  // })

  // $('.sortArray').click(function () {
  //   $(".loading").fadeIn(50).fadeOut(2000)
  //   $('.arraySorted').focus()
  //   let array = myMainArray
  //   var t0 = performance.now().toFixed(5) * 5
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = 0; j < array.length - 1 - i; j++) {
  //       // -i so we dont compare at the end of the array
  //       if (array[j] > array[j + 1]) {
  //         swapArrays(j, j + 1, array);
  //       }
  //     }
  //   };
  //   var t1 = performance.now().toFixed(5) * 5
  //   $('.arraySorted').text("Sorting the array took " + (t1 - t0).toFixed(3) + " milliseconds. Sorted Array: " + array)
  // })
})
