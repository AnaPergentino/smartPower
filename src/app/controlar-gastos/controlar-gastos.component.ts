import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-controlar-gastos',
  templateUrl: './controlar-gastos.component.html',
  styleUrls: ['./controlar-gastos.component.scss']
})
export class ControlarGastosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [250, 200, 260, 700], label: 'Tomadas' },
    { data: [120, 455, 255, 340], label: 'Lâmpadas' },
    { data: [370, 655, 515, 1040], label: 'Total' }
  ];
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: '#59A2C4',
      borderColor: '#0087BD',
      pointBackgroundColor: '#59A2C4',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: '#C9DFB5',
      borderColor: '#29AB87',
      pointBackgroundColor: '#C9DFB5',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,0.8)'
    },
    { // red
      backgroundColor: '#72C79A',
      borderColor: 'green',
      pointBackgroundColor: '#72C79A',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  chartLabels = ['January', 'February', 'Mars', 'April'];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels = ['Tomadas','Lâmpadas','Outros'];
  public pieChartType: ChartType = 'pie';
  public pieChartData: number[] = [300, 500, 100];
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['#59A2C4', '#C9DFB5', '#72C79A'],
    },
  ];

  onChartClick(event) {
    console.log(event);
  }
}
