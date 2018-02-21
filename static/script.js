function update_chart() {
    console.log("requesting chart update")
    $.getJSON("/api/temperature", function (json) {
        var data = [];
        var labels = [];
        var temperature = [];
        var humidity = [];
//        console.log(json);
        json.forEach(list => {
    //        console.log(list);
  //          console.log(list[0]);

            labels.push(new Date(list[0] / 1000000).toISOString());
            temperature.push(list[1]);

        });

      //  console.log(data);
      //  console.log(temperature);
        lineChartData = {
            labels: labels,
            datasets: [{
                label: "Frist",
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgb(255, 99, 132)',
                fill: false,
                data: temperature
            }]
        };
        draw_chart(lineChartData);
    });
}


function draw_chart(lineChartData) {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis'
            },
            scales: {
                yAxes: [{
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: "left",
                    id: "y-axis-1",
                }, {
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: "right",
                    id: "y-axis-2",

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    });
}
