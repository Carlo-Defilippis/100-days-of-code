$(document).ready(function () {

     $('.popup').hide()

     function convertToRoman(num) {
          var remainingValue = num;
          var newRomanNumeral = "";

          var romanNumerals = [{
               numeral: "M",
               value: 1000
          }, {
               numeral: "CM",
               value: 900
          }, {
               numeral: "D",
               value: 500
          }, {
               numeral: "CD",
               value: 400
          }, {
               numeral: "C",
               value: 100
          }, {
               numeral: "XC",
               value: 90
          }, {
               numeral: "L",
               value: 50
          }, {
               numeral: "XL",
               value: 40
          }, {
               numeral: "X",
               value: 10
          }, {
               numeral: "IX",
               value: 9
          }, {
               numeral: "V",
               value: 5
          }, {
               numeral: "IV",
               value: 4
          }, {
               numeral: "I",
               value: 1
          }]; // Array of values and numbers to concat together to make the roman numeral

          for (var i = 0; i < 13; i++) {
               var j = Math.floor(remainingValue / romanNumerals[i].value); // j represents the number of times each character is needed
               while (remainingValue >= romanNumerals[i].value) {
                    newRomanNumeral += romanNumerals[i].numeral.repeat(j); // Add 'x' Numerals to the string
                    remainingValue -= (romanNumerals[i].value * j); // decrease the remaining value
               }
          }

          return newRomanNumeral;
     }

     function showMsg() {
          $(".popup").fadeIn(50).fadeOut(1000)
     }

     $('.convert').click(function () {
          let data = $('.number').val()
          let myNum = parseInt(data)
          console.log(convertToRoman(data))
          console.log(myNum)
          console.log(typeof myNum)
          if (isNaN(myNum)) {
               alert("Sorry! I can't convert letters or other characters =( Only numbers please.")
               $('.number').val('')
          } else {
               $('.roman').text('Your number ' + data + " = " + convertToRoman(data))
               $('.number').val('')
               showMsg()
          }
     });

})