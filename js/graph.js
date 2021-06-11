var ctx = document.getElementById('graph').getContext('2d');

const labels = [
    ["10:59", "PM"], ["11:59", "PM"], ["12:59", "AM"], ["1:59", "AM"], ["2:59", "AM"], ["3:59", "AM"], ["4:59", "AM"], ["5:59", "AM"], ["6:59", "AM"], ["7:59", "AM"]
];
const data =
{
    labels: labels,
    datasets: [{
        label: 'Organic trafic',
        backgroundColor: ['#0077ED'],
        borderColor: '#0077ED',
        data: [4100, 3600, 4600, 4000, 4800, 4100, 5000, 4500, 5500],
    }]
};

var myGraph = new Chart(ctx, {
    type: 'line',
    data,
    options: {
        plugins:
        {
            title:
            {
                display: false
            },
            legend:
            {
                display: false
            }
        },
        elements:
        {
            point:
            {
                radius: 7
            },
            line:
            {
                borderWidth: 5
            }
        },
        scales: {
            y: {
              min: 2000,
              max: 6500,

              ticks:{
                padding: 25,
                
              },
              grid:
              {
                display: false,
                drawBorder: false
              }
            },
            x: {
                grid:
                {
                  display: false,
                  drawBorder: false
                }
              },
            
          },
          layout: {
            padding: 20
        }
    }
});