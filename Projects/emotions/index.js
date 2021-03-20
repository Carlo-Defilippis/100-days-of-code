const brain = require('brain.js');
const network = new brain.recurrent.LSTM()
const tdata = require('./src/t-data');
const serializer = require('./src/serialize');

function isHappyOrSad(emot) {
    if (emotions === 'sad') {
        console.log('This phrase sounds sad to me :(')
    } else {
        console.log('This phrase sounds happy to me :)')
    }
}
const myPhrase = "today is a beautiful day"

network.train(tdata,{iterations: 200, log: true});
const emotions = network.run(myPhrase);
console.log('The phrase is: ', myPhrase,isHappyOrSad(emotions),'Data: ', emotions)