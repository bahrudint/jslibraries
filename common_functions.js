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
		
		
		
	
