'use strict';
{
  var ctx = document.getElementById("myBarChart");
  var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'WordPress', 'Adobe Photoshop', 'Adobe Illustrator'],
      datasets: [
        {
          label: 'Level (%)',
          data: [90, 85, 50, 60, 40, 50, 30, 40],
          backgroundColor: "rgba(0, 174, 255, 0.5)"
        }
      ]
    },
    options: {
      title: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            suggestedMax: 100,
            suggestedMin: 0,
            stepSize: 10,
            callback: function(value, index, values){
              return  value
            }
          }
        }]
      }
    }
  });
}