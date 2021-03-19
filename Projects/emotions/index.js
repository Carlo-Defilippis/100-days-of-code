const brain = require('brain.js');
const network = new brain.NeuralNetwork();
const tdata = require('./src/t-data');
const serializer = require('./src/serialize');

network.train(serializer.serialize(tdata),{log: true});
const emotions = network.run(serializer.encode('i had a good day'));
console.log(emotions)