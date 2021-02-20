$(document).ready(function () {

    $('.cipher').hide()


    function palindromeChecker(str) {
        str = str.toLowerCase().replace(/[\W_]/g, "");
        for (var i = 0, len = str.length - 1; i < len / 2; i++) {
          if (str[i] !== str[len - i]) {
            return false;
          }
        }
        return true;
      }

    $('.convertPhrase').click(function () {
        let data = $('.textToConvert').val()
        let answer = palindromeChecker(data)
        $(".cipher").fadeIn(50).fadeOut(2000)
        $('.cipherDone').focus()
        if (answer) {
            $('.cipherDone').removeClass('text-danger').addClass('text-success')
            $('.cipherDone').text('Your word or phrase "' + data + '" is a Palindrome!')
        } else {
            $('.cipherDone').removeClass('text-success').addClass('text-danger')
            $('.cipherDone').text('Your word or phrase "' + data + '" is not a Palindrome!')
        }
    });


})