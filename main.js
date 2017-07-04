

var time = 0.00;
var started = false;
var recordArray = [];
var records = 0;
var interval;





setUp()







function startTimer() {
    if (started === false) {
        interval = setInterval(function() {
            time += .01;
            document.getElementById('timeDisplay').innerHTML = time.toFixed(2);
        }, 10)
        started = true;
    } else {
        clearInterval(interval);
        started = false;
    }
}

function setUp() {
    document.getElementById('startStop').addEventListener('click', function() {
        startTimer();
    })

    document.addEventListener('keydown', function(event) {
        if (event.key === 's') {
            startTimer();
        }
    })

    document.getElementById('recordTime').addEventListener('click', function() {
        recordArray.push(time.toFixed(2).toString() + '<br>');
        document.getElementById('timeList').innerHTML += recordArray[records];
        records++;    
    })

    document.addEventListener('keydown', function(event) {
        if (event.key === 't') {
            recordArray.push(time.toFixed(2).toString() + '<br>');
            document.getElementById('timeList').innerHTML += recordArray[records];
            records++;          
        }
    })

    document.getElementById('reset').addEventListener('click', function() {
        if (time > 0) {
            clearInterval(interval);
            time = 0;
            started = false;
            document.getElementById('timeDisplay').innerHTML = '0.00';
            document.getElementById('timeList').innerHTML = '';
        } 
    })

    document.addEventListener('keydown', function(event) {
        if (event.key === 'r') {
            if (time > 0) {
                clearInterval(interval);
                time = 0;
                started = false;
                document.getElementById('timeDisplay').innerHTML = '0.00';
                document.getElementById('timeList').innerHTML = '';
            }
        }
    })
}
