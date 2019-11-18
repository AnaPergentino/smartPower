import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';

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

  chartLabels = ['January', 'February', 'Mars', 'April'];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
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

  onChartClick(event) {
    console.log(event);
  }
}
