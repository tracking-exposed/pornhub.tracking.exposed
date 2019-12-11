function render(data, radarChartOptions) { 

    //Call function to draw the Radar chart
    RadarChart(".radarChart", data, radarChartOptions);
};

function initializeRadar() {
    // this function is invoke by 'public.js'

    let users = window.location.href.split('/#').pop();
    console.log("looking for publickeys in:", users);

    if(_.size( users.split(',')) != 2) {
        console.log("failed first integrity check", users);
        return false;
    }

    if (window.location.origin.match(/localhost/)) {
        url='http://localhost:10000/api/v1/radar/' + users;
        console.log("Development URL", url);
    } else {
        url='/api/v1/radar/' + users;
        console.log("Production URL", url);
    }

    
    var margin = {top: 100, right: 100, bottom: 100, left: 100},
        width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
        height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
            
    var color = d3.scaleOrdinal()
        .range(["#ffffff","#f98e05","#00A0B0"]);
        
    var radarChartOptions = {
      w: width,
      h: height,
      margin: margin,
      maxValue: 0.5,
      levels: 5,
      roundStrokes: true,
      color: color
    };

    $.getJSON(url, function(data) {
    /* this is the format
         {axis:"Battery Life",value:0.22}, 
         {axis:"Brand",value:0.28},          */
        console.log("rendering radar graph with", data);
        render(data.tops, radarChartOptions);
    });
};