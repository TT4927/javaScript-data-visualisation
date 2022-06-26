/*source: youtube: codez des graphiques facilement avec chart.js/ le designer du web/ feb 27,2022*/

//LIVE CHART

//Check CODEPEN https://codepen.io/jordanwillis/pen/bqaGRR

//call the element
let firstHeading = document.getElementById("firstHeading");

//create chart in Html element
let liveChart = document.createElement("canvas");

//set an attribute on the chart
liveChart.setAttribute("id", "Chartcontainer");

//append chart 
firstHeading.appendChild(liveChart);


//create initial empty chart
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//set /declare data
var ctx_live = document.getElementById("Chartcontainer");

var theChart = new Chart(ctx_live, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            data: [],
            borderWidth: 1,
            borderColor: 'blue',
            label: 'liveCount',
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: "Chart.js - Dynamically Update Chart Via Ajax Requests",
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});

//post id that drives the example data
var postId = 1;


//get the new data
let getData = function() {
    $.ajax({
        url: "https://canvasjs.com/services/data/datapoints.php",
        success: function(data) {

            labels = [];
            values = [];
            for (i = 0; i < data.length; i++) {
                theChart.data.labels.push(" " + data[0][1]++);
                theChart.data.datasets[0].data.push(data[0][0]++);
            }

            theChart.update();
        }
    });
};
setInterval(getData, 3000);



//-----------------------------------------------







//----------------------------------------------------------------

//chart 1

//call element
let secondtHeading = document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police");
let loveChart = document.createElement("canvas");
loveChart.setAttribute("id", "myChart");
secondtHeading.appendChild(loveChart);

//https://css-tricks.com/the-many-ways-of-getting-data-into-charts/

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Belgium", 
                 "Bulgaria", 
                 "Czech Republic", 
                 "Denmark", 
                 "Germany",   
                 "Estonia", 
                 "Ireland", 
                 "Greece",
                 "Spain", 
                 "France",
                 "Croatia", 
                 "Italy",
                 "Cyprus", 
                 "Latvia", 
                 "Lithuania", 
                 "Luxembourg", 
                 "Hungary", 
                 "Malta", 
                 "The Netherlands", 
                 "Austria", 
                 "Poland", 
                 "Portugal", 
                 "Romania", 
                 "Slovenia", 
                 "Slovakia", 
                 "Finland", 
                 "Sweden", 
                 "Iceland",
                 "Lichtenstein", 
                 "Norway", 
                 "Switzerland",
                 "Montenegro", 
                 "Macedonia", 
                 "Serbia", 
                 "Turkey"],

datasets: [{
label: '2002',
backgroundColor: "blue",
data: [1012.8, 146.9, 372,3, 491.5, 6507.4, 53.3, 106.4, 441.1,2183.5,4113,9,77.9, 2231.6,4.8,49.3,72.6,26.0,420.8,17.0,1401.9,591.6,1404.2,
391.6, 312.2, 77.2,107.4,435,1234.8,19.9,1,319.5,356.8, 8.9,18.3,95.6,438.77],
}, {
label: '2003',
backgroundColor: "red",
data: [1007.8,143.9, 357.7,486.2,6572.1, 53.6, 103.5,441.8, 2144.2, 3974.7,80.4, 2456.9,7.3, 51.8, 79.1, 26.2,413.3,17.7,1369.3,
    643.3, 1466.6, 417.4,276.8,76.6,111.9,443.5,1255.4,17.5,1.1,303.8,379.3,8.6,22.5, 90.4,472.2], 
}, {
    label: '2004',
    backgroundColor:"yellow",
data: [1013.7,142.1,351.6,474.4,6633.2, 53, 99.2, 405.6, 2141.3,3825.4, 85.4, 2417.7,7.6, 62.2, 84.1, 26.9, 418.8, 18.4, 1319.5,
643.6, 1461.2, 416.4, 231.6, 86.6, 131.2, 445.5, 1248.7, 16.6, 1, 287.8,389.4, 8.2, 22.7, 99.9, 507.5],
}, {
    label: '2005',
    backgroundColor: 'black',
    data: [999.4, 137.8, 344.1, 432.7, 6391.7, 52.9, 102.2, 456, 2230.9, 3775.8, 79.9, 2579.1, 7.2, 51.4, 82.1, 25.3, 436.5,
        18.6, 1348.3, 605.3, 1380, 392.7, 208.2, 84.4, 123.6, 432.3, 1241.8, 12, 1.1, 275.7, 352.7, 9.6, 22.6, 102.1, 667.8],
}, {
    label: '2006',
    backgroundColor: 'purple',
    data: [1022.8, 136.4, 336.4, 425.1, 6304.1, 51.8, 103.2, 463.8, 2267.1, 3725.6, 81, 2771.5, 7.9, 62.3, 75.5, 25.9, 425.9,
    16.5, 1311.8, 589.5, 1287.9, 399.6, 232.7, 90.4, 115.2, 416.1, 1225, 13.5, 1.2, 277, 335.2, 9.6, 22, 99.2, 975.1],
}, {
    label: '2007',
    backgroundColor: 'orange',
    data: [1034.4, 134.7, 357.4, 445.3, 628.7, 50.4, 0, 423.4, 2309.9, 3589.3, 75.9, 2933.1, 7.6, 55.6, 68, 28.3, 426.9, 15,
    1303.8, 594.2, 1153, 398.6, 281.5, 88.2, 110.8, 435.8, 1306.3, 13, 1.1, 271.7, 326.2, 9.3, 26.2, 104.9, 970.6],
}, {
    label: '2008',
    backgroundColor:'green',
    data: [1043.6, 126.7, 343.8, 477, 6114.1, 51, 0, 417.4, 2396.9, 3558.3, 74.6, 2709.9, 7.3, 57.5, 72, 28.2, 408.4, 13.8,
    1277.8, 572.7, 1082.1, 430.5, 289.3, 81.9, 104.8, 440.7, 1377.9, 14.6, 1.1, 264.2, 323.2, 8.3, 28.3, 106, 1012.3],

},{
    label:'2009',
    backgroundColor:'pink',
    data: [
    1067.3, 138.1, 332.8, 491.8, 6054.3, 48.4, 0, 386.9, 2339.2, 3521.3, 73.5, 2629.8, 7.1, 56.7, 76.3, 32.4, 394, 12, 1254.5,
    591.6, 1129.6, 426,  299.9, 87.5, 104.9, 441.4, 1405.6, 16, 1.2, 277.1, 676.3, 8.1, 27.3, 102.4, 1288.1],

}, {
    label: '2010',
    backgroundColor: 'gray',
    data: [1072, 147, 313.4, 471.1, 5933.3, 48.3, 0, 334, 2297.5, 0, 73.3, 2621, 8.4, 51.1, 70.6, 30.5, 447.2, 13.3, 1194, 535.7,
    1151.2, 422.6, 292.7, 89.5, 95.3, 431.6, 1370.4, 14.9, 1, 270.7, 656.9, 7, 28.5, 101.1, 1521.7],
}, {
    label: '2011',
    backgroundColor: 'beige',
    data: [1111, 128.6, 317.2, 466.8, 5990.7, 42.6, 0, 194, 2285.5, 0, 75.6, 2763, 8.5, 51.6, 72.1, 35.7, 451.4, 14.2, 1194.1, 540,
    1159.6, 413.7, 258.9, 88.7, 92.9, 458.3, 1416.3, 12.6, 1.1, 264.2, 693, 6.1, 29.5, 99.5, 1652.8,]
}, {
    label: '2012',
    backgroundColor: 'turquoise',
    data: [1073.8, 120.6, 304.5, 440.8, 5997, 40.8, 0, 194.1, 2268.9, 0, 72.2, 2818.8, 8, 49.9, 75.3, 37.6, 472.2, 15.6, 1139.7, 548,
    1119.8, 403.2, 308.5, 91.4, 90.4, 425.4, 1402.6, 11.7, 1.1, 273.5, 750.4, 5.8, 29.9, 96.1, 1904.5],
}]
    },

    options: {
        legend:{
            display: true,
            position: "top",
            labels:{
                fontColor: "#000080",
            }
        },
        scales: {
            y: {
               suggestedMax: 7000,
               ticks: {
                   font: {
                       size: 10
                   }
               }
            },
            x: {
                ticks:{
                    font: {
                        size: 10
                    }
                }

            }
        }
    }
})

//----------------------------------------------------------------
//chart 2

// call the element

let table2 = document.getElementById("table2");

// create canvas in HTML

let SecondTableChart = document.createElement("canvas");
SecondTableChart.setAttribute("id", "mySecondTable");

// append canvas
table2.appendChild(SecondTableChart);

// set the location
table2.before(SecondTableChart);

// declare the data

//column 1
let countryTable2 = [];

//column 2
let date1Table2 = [];

//column 3
let date2Table2 = [];

for (let i = 1; i < table2.rows.length; i++) {
    let row = table2.rows[i];
    let colCountry = row.cells[1].innerText;
    //console.log(colCountry)
    countryTable2.push(colCountry);
}
for (let i = 1; i < table2.rows.length; i++) {
    let row = table2.rows[i];
    let date1 = row.cells[2].innerText;
    //console.log(date1)
    date1Table2.push(date1);
}
for (let i = 1; i < table2.rows.length; i++) {
    let row = table2.rows[i];
    let date2 = row.cells[3].innerText;
    //console.log(date2)
    date2Table2.push(date2);
}

//create the chart

let secondChart = document.getElementById("mySecondTable")
let firstDate = {
    label: "2007_09",
    data: date1Table2,
    backgroundColor: "blue",

    borderWidth: 1,
    // yAxisID: "y-axis-density"
}
let secondDate = {
    label: "2010_12",
    data: date2Table2,
    backgroundColor: "red",

    borderWidth: 1,
    // yAxisID: "y-axis-gravity"
};
let countriesData = {
    labels: countryTable2,
    datasets: [firstDate, secondDate]
};

let chartOptions = {
    scales: {
        xAxes: [{
            barPercentage: 1,
            categoryPercentage: 0.5
        }],
        YAxes: [{
            // id: "y-axis-density"
        }, {
            // id: "y-axis-gravity"
        }]
    }
};
let lineChart = new Chart(secondChart, {
    type: "bar",
    data: countriesData,
    options: chartOptions
});