function getSquare(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left) % 10,
        y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top) % 10
    };
}

function drawGrid(context) {
    for (var x = 0.5; x < 501; x += 50) {
        context.moveTo(x, 0);
        context.lineTo(x, 500);
        console.log(x)
    }

    for (var y = 0.5; y < 501; y += 50) {
        context.moveTo(0, y);
        context.lineTo(500, y);
        console.log(y)
    }

    context.strokeStyle = "#aaa";
    context.stroke();
}

function fillSquare(context, x, y) {
    context.fillStyle = "gray"
    context.fillRect(x, y, 9, 9);
}

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

drawGrid(context);

var myPoints = [[0.5, 0.5]
    , [0.5, 50.5]
    , [0.5, 100.5]
    , [0.5, 150.5]
    , [0.5, 200.5]
    , [0.5, 250.5]
    , [0.5, 300.5]
    , [0.5, 350.5]
    , [0.5, 400.5]
    , [0.5, 450.5]
    , [50.5, 0.5]
    , [50.5, 50.5]
    , [50.5, 100.5]
    , [50.5, 150.5]
    , [50.5, 200.5]
    , [50.5, 250.5]
    , [50.5, 300.5]
    , [50.5, 350.5]
    , [50.5, 400.5]
    , [50.5, 450.5]
    , [100.5, 0.5]
    , [100.5, 50.5]
    , [100.5, 100.5]
    , [100.5, 150.5]
    , [100.5, 200.5]
    , [100.5, 250.5]
    , [100.5, 300.5]
    , [100.5, 350.5]
    , [100.5, 400.5]
    , [100.5, 450.5]
    , [150.5, 0.5]
    , [150.5, 50.5]
    , [150.5, 100.5]
    , [150.5, 150.5]
    , [150.5, 200.5]
    , [150.5, 250.5]
    , [150.5, 300.5]
    , [150.5, 350.5]
    , [150.5, 400.5]
    , [150.5, 450.5]
    , [200.5, 0.5]
    , [200.5, 50.5]
    , [200.5, 100.5]
    , [200.5, 150.5]
    , [200.5, 200.5]
    , [200.5, 250.5]
    , [200.5, 300.5]
    , [200.5, 350.5]
    , [200.5, 400.5]
    , [200.5, 450.5]
    , [250.5, 0.5]
    , [250.5, 50.5]
    , [250.5, 100.5]
    , [250.5, 150.5]
    , [250.5, 200.5]
    , [250.5, 250.5]
    , [250.5, 300.5]
    , [250.5, 350.5]
    , [250.5, 400.5]
    , [250.5, 450.5]
    , [300.5, 0.5]
    , [300.5, 50.5]
    , [300.5, 100.5]
    , [300.5, 150.5]
    , [300.5, 200.5]
    , [300.5, 250.5]
    , [300.5, 300.5]
    , [300.5, 350.5]
    , [300.5, 400.5]
    , [300.5, 450.5]
    , [350.5, 0.5]
    , [350.5, 50.5]
    , [350.5, 100.5]
    , [350.5, 150.5]
    , [350.5, 200.5]
    , [350.5, 250.5]
    , [350.5, 300.5]
    , [350.5, 350.5]
    , [350.5, 400.5]
    , [350.5, 450.5]
    , [400.5, 0.5]
    , [400.5, 50.5]
    , [400.5, 100.5]
    , [400.5, 150.5]
    , [400.5, 200.5]
    , [400.5, 250.5]
    , [400.5, 300.5]
    , [400.5, 350.5]
    , [400.5, 400.5]
    , [400.5, 450.5]
    , [450.5, 0.5]
    , [450.5, 50.5]
    , [450.5, 100.5]
    , [450.5, 150.5]
    , [450.5, 200.5]
    , [450.5, 250.5]
    , [450.5, 300.5]
    , [450.5, 350.5]
    , [450.5, 400.5]
    , [450.5, 450.5]]


console.log(myPoints[2][1])

function fillMySquare(context, x) {
    context.fillStyle = 'green'
    context.fillRect(myPoints[x][0], myPoints[x][1], 50, 50)
}

var isDone = true
var myCounter = 0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



$('.addNumbers').click(function () {
    async function drawOnBox(context, numDoors) {
        let i = 0
        while (i <= numDoors.length) {
            console.log(i)
            context.fillStyle = 'green'
            context.fillRect(numDoors[i][0], numDoors[i][1], 50, 50)
            i++;
            await sleep(70);
            context.fillStyle = 'white'
            context.fillRect(numDoors[i][0], numDoors[i][1], 50, 50)
        }
        return console.log(doors);
    }
    drawOnBox(context, myPoints)
})

$('.sortArray').click(function () {
    async function drawOnBox(context, numDoors) {
        let i = 0
        while (i <= numDoors.length) {
            console.log(i)
            context.fillStyle = 'white'
            context.fillRect(numDoors[i][0], numDoors[i][1], 50, 50)
            i++;
            await sleep(70);
            context.fillStyle = 'green'
            context.fillRect(numDoors[i][0], numDoors[i][1], 50, 50)
        }
        return console.log(doors);
    }
    drawOnBox(context, myPoints)
})
