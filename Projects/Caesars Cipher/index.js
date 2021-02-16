$(document).ready(function () {

    $('.cipher').hide()
    $('.decipher').hide()

    function caesarCipher(str) {
        let myCipher = str.toUpperCase()
        console.log(myCipher)
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return myCipher
            .split('')
            .map(char => {
                const pos = alphabet.indexOf(char);
                return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
            })
            .join('');
    }

    function showMsgCode() {
        $(".cipher").fadeIn(50).fadeOut(2000)
    }


    $('.convertPhrase').click(function () {
        let data = $('.textToConvert').val()
        let answer = caesarCipher(data)
        showMsgCode()
        $('.cipherDone').focus()
        $('.cipherDone').text('Your phrase ' + data + " = " + answer)
    });

})