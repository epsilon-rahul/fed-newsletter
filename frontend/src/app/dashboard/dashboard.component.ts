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
                id: "won",
                name: "Won",
                value: 43,
            },
            {
                id: "Rfpr",
                name: "RFP requested",
                value: 89,
            },
            {
                id: "Rfpi",
                name: "RFP in-progress",
                value: 50,
            },

            {
                id: "Pros",
                name: "Proposal submitted",
                value: 72,
            },
            {
                id: "Prour",
                name: "Proposal under Review ",
                value: 52,
            },
            {
                id: "Sowu",
                name: "SOW under Review",
                value: 77,
            },
            {
                id: "Sow",
                name: "SOW",
                value: 43,
            },
            {
                id: "verba",
                name: "Verbal approval",
                value: 43,
            },
        ];

        this.two = [
            {
                id: "financial",
                name: "Financial",
                value: 40,
            },
            {
                id: "retail",
                name: "Retail",
                value: 50,
            },
            {
                id: "media",
                name: "Media",
                value: 72,
            },
            {
                id: "healthcare",
                name: "Healthcare",
                value: 52,
            },
            {
                id: "telecom",
                name: "Telecom",
                value: 77,
            },
            {
                id: "Travel",
                name: "Travel & Hospitality",
                value: 43,
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
