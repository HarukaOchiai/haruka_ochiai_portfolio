'use strict';
{
  var ctx = document.getElementById("myBarChart");
  var myBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'WordPress'],
      datasets: [
        {
          label: 'Level (%)',
          data: [90, 90, 30, 40, 20, 80],
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
