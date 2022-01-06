<template>
  <div class="block w-100">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: "line",
        },
        title: {
          text: "Monthly Average Temperature",
        },
        subtitle: {
          text: "",
        },
        xAxis: {
          categories: [],
        },
        yAxis: {
          title: {
            text: "price",
          },
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true,
            },
            enableMouseTracking: false,
          },
        },
        series: [
          {
            name: "Shopping",
            data: [7.0],
          },
          {
            name: "sales",
            data: [3.9],
          },
        ],
      },
    };
  },
};
</script>