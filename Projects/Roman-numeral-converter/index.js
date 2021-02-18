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
          $(".popup").fadeIn(50).fadeOut(2000)
     }

     $('.convert').click(function () {
          let data = $('.number').val() // Gets value of text box on html page via jQuery
          let isnum = /^\d+$/.test(data); // Checks if string is a valid number
          if (!isnum) {
               alert("Sorry! I can't convert letters or other characters =( Only numbers please. P.S. The romans had no concept of zero, so there is no negatives allowed either.")
               $('.number').val('')
          } else {
               if (data == '0') {
                    alert("Sorry! The romans had no concept of zero!")
               } else {
               $('.roman').text('Your number ' + data + " = " + convertToRoman(data))
               $('.roman').focus()
               $('.number').val('')
               showMsg()
               }
          }
     });

})