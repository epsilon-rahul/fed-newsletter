import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/login/auth.service";
import { ProjectService } from "../project.service";

@Component({
    selector: "app-view-all",
    templateUrl: "./view-all.component.html",
    styleUrls: ["./view-all.component.scss"],
})
export class ViewAllComponent implements OnInit {
    @Input() lists;
    isAdmin: any = false;

    constructor(
        public projectService: ProjectService,
        public authSerive: AuthService
    ) {}

    ngOnInit() {
        if (!this.lists) {
            this.projectService.list("").subscribe(
                (resp) => {
                    console.log(resp);
                    this.lists = resp;
                },
                (err) => {
                    console.log(err);
                }
            );
        }
        if (
            this.authSerive.getRole() === "admin" ||
            this.authSerive.getRole() === "author"
        ) {
            this.isAdmin = true;
        } else {
            this.isAdmin = false;
        }
    }
}
