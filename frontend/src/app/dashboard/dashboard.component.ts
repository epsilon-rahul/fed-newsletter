import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  single: any[];
  two: any[];
  multi: any[];
  view: any[] = [, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Profit';
  yAxisLabel: string = 'Project';
  timeline: boolean = true;
  first;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';



  constructor() {
    Object.assign(this, { multi });



    this.first = [
      {
        "name": "RFP requested",
        "value": 8940000
      },
      {
        "name": "RFP in-progress",
        "value": 5000000
      },
      {
        "name": "Proposal submitted",
        "value": 7200000
      },
      {
        "name": "Proposal under Review ",
        "value": 5200000
      },
      {
        "name": "SOW under Review",
        "value": 7700000
      },
      {
        "name": "SOW",
        "value": 4300000
      },
      {
        "name": "Verbal approval",
        "value": 4300000
      },
      {
        "name": "Won",
        "value": 4300000
      },
      {
        "name": "Business Development",
        "value": 4300000
      },
      {
        "name": "Proposal not shortlisted",
        "value": 4300000
      },
      {
        "name": "Closed",
        "value": 4300000
      }
    ]

    this.two = [
      {
        "name": "Financial",
        "value": 8940000
      },
      {
        "name": "Retail",
        "value": 5000000
      },
      {
        "name": "Media",
        "value": 7200000
      },
      {
        "name": "Healthcare",
        "value": 5200000
      },
      {
        "name": "Telecom",
        "value": 7700000
      },
      {
        "name": "Travel & Hospitality",
        "value": 4300000
      }
    ]
  }

  ngOnInit() {
    this.single = this.first;
  }

  onSelect(event) {
    console.log(event);
  }

  change(e) {
    console.log(e);
    if (e == 'Vertical Domain') {

      this.single = this.two;
    } else {
      this.single = this.first
    }
  }

}
