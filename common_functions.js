 function getAverage(ChartID,t_min_ID,t_max_ID,axis=0) {
        var y_data = document.getElementById(ChartID).data[axis].y;
        var x_data = document.getElementById(ChartID).data[0].x;
        var average = 0;
        var counter = 0;
        const t_min = Number(document.getElementById(t_min_ID).value);
        const t_max = Number(document.getElementById(t_max_ID).value);

        for (var i = 0; i < y_data.length - 1;i++)
        {
            const t = Number(x_data[i]);
            if( t>= t_min && t <= t_max)
            {
                average += Number(y_data[i]);
                counter++;
            }
            
        };
        average = Math.round(average/counter * 100) / 100;
        return average;}
		
		

function plot_from_table(tabledata,CHARTID,xaxis="id") {
  var alldata = tabledata;
  layout.xaxis.title.text=xaxis;
  var tableKeys = Object.keys(alldata[0]);
  var traces = [];
  tableKeys.forEach(function(item, index) {
  if ((item != xaxis) && (item != "id")) {
    var trace = {y: [],x: [],
      mode: "markers",
      name: item,
      marker: {size: 12}};
    alldata.forEach(function(itemm, indexx) {
      if (indexx > 0) {
        trace.x.push(itemm[xaxis]);
        trace.y.push(itemm[item]);}});
    traces.push(trace);}})
  Plotly.newPlot(CHARTID, traces, layout, config);}

function createSingleMeasurementField(fieldID,buttonID,addDataID,measurementName="Measurement"){
	var buttonHTML = `<div class="w3-container w3-center">
	<div class="w3-card-4 w3-center" style="width:70%; margin: auto;">
		<div class="w3-container">
		<p><header><h3>${measurementName}</h3></header></p>
		<h2><span id="${addDataID}"><b>_____</b></span></h2><br></div>
	 <button id="${buttonID}" class="w3-button w3-block w3-red w3-big">Take Measurement</button>
	</div></div>`;
document.getElementById(fieldID).innerHTML = buttonHTML;
};
