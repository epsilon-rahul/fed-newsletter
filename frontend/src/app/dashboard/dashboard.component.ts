import { Component, OnInit } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ProjectService } from "../project/project.service";
import { multi } from "./data";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
    single: any[];
    two: any[];
    multi: any[];
    // view: any[] = [, 300];
    view: any[] = [1100, 400];

    // options
    legend: boolean = false;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = false;
    showXAxisLabel: boolean = false;
    xAxisLabel: string = "Profit";
    yAxisLabel: string = "Project";
    timeline: boolean = true;
    first;
    three;
    lists;

    colorScheme = {
        domain: [
            "#5AA454",
            "#E44D25",
            "#CFC0BB",
            "#7aa3e5",
            "#a8385d",
            "#aae3f5",
        ],
    };
    cardColor: string = "#232837";

    constructor(public projectService: ProjectService) {
        Object.assign(this, { multi });

        this.first = [
            {
                name: "Won",
                value: 43,
                color: "#28a745",
                fonts: "fa fa-trophy",
            },
            {
                name: "RFP requested",
                value: 89,
                color: "#8e24aa",
                fonts: "fa fa-hand-pointer",
            },
            {
                name: "RFP in-progress",
                value: 50,
                color: "#17a2b8",
                fonts: "fa fa-spinner",
            },

            {
                name: "Proposal submitted",
                value: 72,
                color: "#ffc107",
                fonts: "fa fa-hand-pointer-o",
            },
            {
                name: "Proposal under Review ",
                value: 52,
                color: "#dc3545",
                fonts: "fa fa-commenting-o",
            },
            {
                name: "SOW under Review",
                value: 77,
                color: "#00c0ef",
                fonts: "fa fa-commenting-o",
            },
            {
                name: "SOW",
                value: 43,
                color: "#007bff",
                fonts: "fa fa-briefcase",
            },
            {
                name: "Verbal approval",
                value: 43,
                color: "#fb8c00",
                fonts: "fa fa-thumbs-o-up",
            },
        ];

        this.two = [
            {
                name: "Financial",
                value: 8940000,
            },
            {
                name: "Retail",
                value: 5000000,
            },
            {
                name: "Media",
                value: 7200000,
            },
            {
                name: "Healthcare",
                value: 5200000,
            },
            {
                name: "Telecom",
                value: 7700000,
            },
            {
                name: "Travel & Hospitality",
                value: 4300000,
            },
        ];
        this.three = [
            {
                name: "Samsung",
                value: 1,
            },
            {
                name: "Bosch",
                value: 2,
            },
            {
                name: "Exxon",
                value: 3,
            },
            {
                name: "Citi",
                value: 4,
            },
            {
                name: "Telecom",
                value: 5,
            },
            {
                name: "Microsoft",
                value: 6,
            },
        ];
    }

    ngOnInit() {
        this.single = this.first;
        this.projectService.list({ oppStatus: 1 }).subscribe(
            (resp) => {
                console.log(resp);
                this.lists = resp;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    onSelect(event) {
        console.log(event);
    }

    change(e) {
        console.log(e);
        if (e == "Vertical Domain") {
            this.single = this.two;
        } else if (e == "By Client") {
            this.single = this.three;
        } else {
            this.single = this.first;
        }
    }
}
