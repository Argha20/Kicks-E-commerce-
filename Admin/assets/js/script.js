function moveToNext(current, nextId) {
  if (current.value.length === current.maxLength) {
    const next = document.getElementById(nextId);
    if (next) {
      next.focus();
    }
  }
}

// highchart Js

Highcharts.chart("container", {
  title: {
    text: "Sale Graph",
    // align: "left",

    style: {
      fontFamily: "Rubik, sans-serif",
      fontSize: 20,
      fontWeight: "bolder",
      lineHeight: 23.7,
    },
  },
  chart: {
    type: "spline",
    spacing: [30, 25, 30, 25], // Padding: [top, right, bottom, left]
  },

  accessibility: {
    point: {
      valueDescriptionFormat: "{xDescription}{separator}{value} million(s)",
    },
  },

  xAxis: {
    categories: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    title: null, // Remove the X-axis title
    lineWidth: 3.79, // Add the Y-axis line
    lineColor: "rgba(230, 230, 230, 1)",
    labels: {
      style: {
        color: "rgba(33, 33, 33, 1)", // Set label text color
        fontSize: "14px", // Set font size
        fontWeight: "bold", // Set font weight
        fontFamily: "Inter, sans-serif", // Set font family
      },
    },
  },

  yAxis: {
    type: "linear",
    title: null, // Remove the X-axis title
    lineWidth: 3.79, // Add the Y-axis line
    lineColor: "rgba(230, 230, 230, 1)",
    labels: {
      formatter: function () {
        return "$" + this.value; // Format the label as currency
      },
      style: {
        color: "rgba(33, 33, 33, 0.45)", // Set label text color
        fontSize: "14px", // Set font size
        fontWeight: "bold", // Set font weight
        fontFamily: "Inter, sans-serif", // Set font family
      },
    },
  },

  tooltip: {
    headerFormat: "<b>{series.name}</b><br />",
    pointFormat: "{point.y} million(s)",
  },
  legend: {
    enabled: false, // Remove the legend
  },
  series: [
    {
      name: "Orders",
      keys: ["y", "color"],
      data: [[40], [40], [45], [80], [50], [390]],
      type: "spline", // Make the line curve smooth
      spacing: [20, 30, 40, 50],
      lineWidth: 4,
      color: {
        linearGradient: {
          x1: 0,
          x2: 1,
          y1: 1,
          y2: 0,
        },
        stops: [
          [0, "#E2E9FA"],
          [1, "#1b59f8"],
        ],
      },
      marker: {
        enabled: false, // Disable the markers (the dots)
      },
    },
  ],

  credits: {
    enabled: false, // Remove the Highcharts logo
  },
});
