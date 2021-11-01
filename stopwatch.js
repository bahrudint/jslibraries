

window.onload = function () {  
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('start');
  var buttonStop = document.getElementById('stop');
  var buttonReset = document.getElementById('reset');
  var buttonRecord = document.getElementById('recordtime');
  var Interval ;
  var ID = 0;
  var prevTime = 0;

  buttonStart.onclick = function() {
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    table.replaceData();
    ID = 0;
  }
    buttonRecord.onclick = function() {
    ID++;
    TIME = parseFloat(appendSeconds.innerHTML+"."+appendTens.innerHTML).toFixed(2);
    timedelta = TIME-prevTime;
    prevTime = TIME;
    var datapoint = {id:ID, time:TIME,timestep:timedelta.toFixed(2)};
    table.addData([datapoint,]);
    table.redraw();
  }
  
  function startTimer () {
    tens++; 
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9){
      appendTens.innerHTML = tens;
    } 
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
  }
}
