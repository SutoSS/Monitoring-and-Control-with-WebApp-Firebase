window.addEventListener('load', onload);

function onload(event){
  chartT = createTemperatureChart();
  chartH = createHumidityChart();
  chartL = createLuxChart();
  chartSM1 = createSM1Chart();
  chartSM2 = createSM2Chart();
}

// Create Temperature Chart
function createTemperatureChart() {
  var chart = new Highcharts.Chart({
    chart:{ 
      renderTo:'chart-temperature',
      type: 'spline' 
    },
    series: [
      {
        name: 'DHT22-Temperature'
      }
    ],
    title: { 
      text: undefined
    },
    plotOptions: {
      line: { 
        animation: false,
        dataLabels: { 
          enabled: true 
        }
      },
      series: { 
        color: '#A62639' 
      }
    },
    xAxis: {
      type: 'datetime-local',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { 
        text: 'Temperature Celsius Degrees' 
      }
    },
    credits: { 
      enabled: false 
    }
  });
  return chart;
}

// Create Humidity Chart
function createHumidityChart(){
  var chart = new Highcharts.Chart({
    chart:{ 
      renderTo:'chart-humidity',
      type: 'spline'  
    },
    series: [{
      name: 'DHT22-Humidity'
    }],
    title: { 
      text: undefined
    },    
    plotOptions: {
      line: { 
        animation: false,
        dataLabels: { 
          enabled: true 
        }
      },
      series: { 
        color: '#50b8b4' 
      }
    },
    xAxis: {
      type: 'datetime-local',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { 
        text: 'Humidity (%)' 
      }
    },
    credits: { 
      enabled: false 
    }
  });
  return chart;
}

// Create Lux Chart
function createLuxChart() {
  var chart = new Highcharts.Chart({
    chart:{ 
      renderTo:'chart-lux',
      type: 'spline'  
    },
    series: [{
      name: 'BH1750'
    }],
    title: { 
      text: undefined
    },    
    plotOptions: {
      line: { 
        animation: false,
        dataLabels: { 
          enabled: true 
        }
      },
      series: { 
        color: '#eaaa08' 
      }
    },
    xAxis: {
      type: 'datetime-local',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { 
        text: 'Light Intensity (Lux)' 
      }
    },
    credits: { 
      enabled: false 
    }
  });
  return chart;
}
function createSM1Chart(){
  var chart = new Highcharts.Chart({
    chart:{ 
      renderTo:'chart-SM1',
      type: 'spline'  
    },
    series: [{
      name: 'Soil Moisture Sensor 1'
    }],
    title: { 
      text: undefined
    },    
    plotOptions: {
      line: { 
        animation: false,
        dataLabels: { 
          enabled: true 
        }
      },
      series: { 
        color: '#50b8b4' 
      }
    },
    xAxis: {
      type: 'datetime-local',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { 
        text: 'Soil Moisture (%)' 
      }
    },
    credits: { 
      enabled: false 
    }
  });
  return chart;
}
function createSM2Chart(){
  var chart = new Highcharts.Chart({
    chart:{ 
      renderTo:'chart-SM2',
      type: 'spline'  
    },
    series: [{
      name: 'Soil Moisture Sensor 2'
    }],
    title: { 
      text: undefined
    },    
    plotOptions: {
      line: { 
        animation: false,
        dataLabels: { 
          enabled: true 
        }
      },
      series: { 
        color: '#50b8b4' 
      }
    },
    xAxis: {
      type: 'datetime-local',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { 
        text: 'Soil Moisture (%)' 
      }
    },
    credits: { 
      enabled: false 
    }
  });
  return chart;
}