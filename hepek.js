function addData(datacontainer, x, y, chartID="Chart1") {
    datacontainer.x.push(x);
    datacontainer.y.push(y);
    Plotly.redraw(chartID);
}

function removeData(datacontainer,chartID="Chart1") {
    datacontainer.x=[];
    datacontainer.y=[];
    Plotly.redraw(chartID);
}

var listento     = "Hepek_"+userdata["macid"];
var postto = "RespToHepek_"+userdata["macid"];


// MQTT handling
client = new Paho.MQTT.Client("broker.emqx.io", Number(8084),"/mqtt", "clientId");
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.connect({
	onSuccess: onConnect, 
    useSSL: true
});

function onConnect() {
  console.log("Connected to MQTT server!");
  console.log(listento);
  client.subscribe(listento); ////// This is the topic !!!
  
  //message = new Paho.MQTT.Message("Connected to topic "+postto);
 // message.destinationName = postto;
  //client.send(message); 
}

function getEspData(sensor,interval=300,start="1",rapidNum="1") {
    /**
     * sensors: analog, laserDistance,rapidAnalog,pressTemp
     * interval -> in miliseconds
     * start:1 stop:0
    **/
    var order =  `{"sensor":"${sensor}",
                 "interval":"${interval}",
                    "start":"${start}",
                 "rapidNum":"${rapidNum}"}`;
    message = new Paho.MQTT.Message(order);
    message.destinationName = postto;
    client.send(message); 
    if (start=="1") {sendTextToDisplay("Recording in progres...",sensor);}
    else {sendTextToDisplay("Recording Done!","Awesome");}
    // console.log(order);
}

function sendTextToDisplay(line1,line2="",line3="",line4="") {
    var order =  `{"sensor":"display",
                    "line1":"${line1}",
                    "line2":"${line2}",
                    "line3":"${line3}",
                    "line4":"${line4}"}`;
    message = new Paho.MQTT.Message(order);
    message.destinationName = postto;
    setTimeout(() => { client.send(message); }, 200);
}


function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

function onMessageArrived(message) {
  //console.log("onMessageArrived:"+message.payloadString);
  var obj = JSON.parse(message.payloadString);
  if ("laserDistance" in obj) {addData(datacontainer,obj["millis"],obj["laserDistance"]);}
  if ("analog" in obj)        {addData(datacontainer,obj["millis"],obj["analog"]);}
  if ("mass" in obj)          {addData(datacontainer,obj["millis"],obj["mass"]);}
  if ("temp" in obj)          {addData(datacontainer,obj["millis"],obj["temp"]);}
  if ("pressTemp" in obj)     {addData(datacontainer,obj["millis"],obj["pressTemp"]);}
}
