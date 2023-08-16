import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.css'],
  
  
})
export class AreachartComponent {

  Highcharts=Highcharts
  chartOptions={}

  constructor(){
// If you want to call a class property outside the class you should use (this).
    this.chartOptions={
      // Set up the chart
  chart: {
      renderTo: 'container',
      type: 'column',
      options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
      }
  },
  xAxis: {
      categories: ['Mearn', '.net', 'flutter', 'BigData', 'JavaSpring', 'AI',
          'Testing', 'Data Science', 'ML', 'Python']
  },
  yAxis: {
      title: {
          enabled: false
      }
  },
  tooltip: {
      headerFormat: '<b>{point.key}</b><br>',
      pointFormat: 'Placements: {point.y}'
  },
  title: {
      text: 'YEARLY PLACEMENT ANALYSIS OF LUMINAR TECHNOLAB 2022-2023',
      align: 'center'
  },
  subtitle: {
      text: 'LUMINAR TECHNOLAB',
      align: 'center'
  },
  legend: {
      enabled: false
  },

  credits:{enabled:false},
  plotOptions: {
      column: {
          depth: 25
      }
  },
  series: [{
      data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
      colorByPoint: true
  }]




    }

  }

}
