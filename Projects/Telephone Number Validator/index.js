$(document).ready(function () {

    $('.popup').hide()

    function telephoneCheck(str) {
        var isValidPhone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str);
        return isValidPhone;
      }

      $('.checkNumber').click(function () {
        let data = $('.number').val()
        console.log(data)
        let answer = telephoneCheck(data)
        $(".popup").fadeIn(50).fadeOut(2000)
        $('.valid').focus()
        if (answer) {
            $('.valid').text('Your phone number ' + data + " is valid!")
            $('.number').val('')
        } else {
            $('.valid').text('Your phone number ' + data + " is invalid :(")
            $('.number').val('')
        }
    });
})
