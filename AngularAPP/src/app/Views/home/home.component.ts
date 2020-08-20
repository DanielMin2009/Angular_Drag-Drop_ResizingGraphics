import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';

import { Options } from 'highcharts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  donutChart = new Chart(donutChartOptions);
  
  constructor() {}

  ngOnInit(): void {}
}

export const donutChartOptions: Options = {
    chart: {
        type: 'pie',
        plotShadow: false,
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            innerSize: '99%',
            borderWidth: 40,
            borderColor: null,
            slicedOffset: 20,
            dataLabels: {
                connectorWidth:0 
            }
        }
    },
    title: {
        verticalAlign: 'middle',
        floating: true,
        text: '$ 500.000.00'
    },
    legend: {
        enabled: false,
    },
    series: [
        {
            type: 'pie',
            data: [
                {name:'a', y: 1, color: '#eeeeee'},
                {name:'b', y: 2, color: '#393e46'},
                {name:'c', y: 3, color: '#00abd5'},
                {name:'d', y: 4, color: '#eeeeee'},
                {name:'e', y: 5, color: '#506ef9'},
            ]
        }
    ]
}; 

// import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {
//   highcharts = Highcharts;
//    chartOptions = {
//       chart: {
//          type: "spline"
//       },
//       title: {
//          text: "Monthly Average Temperature"
//       },
//       subtitle: {
//          text: "Source: WorldClimate.com"
//       },
//       xAxis:{
//          categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
//             "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
//       },
//       yAxis: {
//          title:{
//             text:"Temperature °C"
//          }
//       },
//       tooltip: {
//          valueSuffix:" °C"
//       },
//       series: [{
//          name: 'Tokyo',
//          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
//       },
//       {
//          name: 'New York',
//          data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
//       },
//       {
//          name: 'Berlin',
//          data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
//       },
//       {
//          name: 'London',
//          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
//       }]
//    };

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

// import { Component, OnInit, ViewChild } from '@angular/core';
// import { GridsterComponent } from 'angular2gridster';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })

// export class HomeComponent {
//   @ViewChild(GridsterComponent) gridster: GridsterComponent;
//   ...
//   addLine () {
//     this.gridster.setOption('lanes', ++this.gridsterOptions.lanes)
//       .reload();
//   }
//   removeLine () {
//     this.gridster.setOption('lanes', --this.gridsterOptions.lanes)
//       .reload();
//   }
//   changeDirection(direction: string) {
//     this.gridster.setOption('direction', direction)
//       .reload();
//   }
//   toggleDraggable() {
//     this.gridster.setOption('dragAndDrop', gridsterOptions.dragAndDrop)
//       .reload();
//   }
//   toggleResizable() {
//     this.gridster.setOption('resizable', gridsterOptions.dragAndDrop)
//       .reload();
//   }
// }
