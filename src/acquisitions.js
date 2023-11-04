import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  // here I import our data from csv
  const dfd = require("danfojs-node")

  dfd.read_csv("data/node_1_node_status_over_time.csv").then(df => {
    // df is now a DataFrame object and you can perform operations on it
})
.catch(err => {
    console.log(err)
})


  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'I don\'t understand',
            data: data.map(row => row.count)
          }
        ]
      },
      options: {
        plugins: {
            title: {
                display: true,
                text: 'Hello World'
            }
        }
    }
    }
  );
})();
