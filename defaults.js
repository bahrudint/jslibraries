var layout = {
		showlegend: true,
		legend: {x:0, y:1.05},
		title: ' Measurement Of Values',
		images: [{x: 1,y: 1.05,sizex: 0.22,sizey: 0.22,
		source: "static/img/image.png",
		xanchor: "right", xref: "paper",
		yanchor: "bottom",yref: "paper"}],
		yaxis:{fixedrange: false,   },
		xaxis:{fixedrange: false,title:{text:"Id"}},
		automargin: true,
	    };

var config = {showLink: false,
	      responsive: true,
	      scrollZoom: false,
	      staticPlot: true,
	      displayModeBar: true,
	      modeBarButtonsToRemove: ['sendDataToCloud',],
	      displaylogo: false,
	      
	     };
