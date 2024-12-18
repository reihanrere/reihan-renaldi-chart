const data = {
  categories: [
    "January",
    "February",
    "March", "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  series: [
    {
      label: '2022',
      data: [4.017, 6.135, 7.091, 5.841, 5.036, 4.547, 3.467, 3.970, 6.313, 3.595, 9.207, 5.945],
      borderWidth: 1
    },
    {
      label: '2023',
      data: [2.416, 4.136, 7.935, 8.004, 9.505, 5.026, 6.108, 6.343, 9.404, 9.280, 9.287, 8.689],
      borderWidth: 1
    }
  ]
}

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.categories,
    datasets: data.series,
  },
  options: {
    scales: {
      y: {
        ticks: {
          stepSize: 1
        },
      }
    }
  }
});
