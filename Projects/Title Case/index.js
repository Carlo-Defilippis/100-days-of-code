$(document).ready(function () {

    $('.cipher').hide()
    $('.decipher').hide()

    function titleCase(str) {
        var convertToArray = str.toLowerCase().split(" ");
        var result = convertToArray.map(function(val) {
          return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        });
        return result.join(" ");
      }

    function showMsgCode() {
        $(".cipher").fadeIn(50).fadeOut(2000)
    }


    $('.convertPhrase').click(function () {
        let data = $('.textToConvert').val()
        let answer = titleCase(data)
        showMsgCode()
        $('.cipherDone').focus()
        $('.cipherDone').text('Your phrase ' + data + " = " + answer)
    });

})