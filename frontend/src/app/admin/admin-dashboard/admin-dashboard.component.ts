import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MustMatch } from "../../shared/_helpers/custom-validator";
import { UserServiceService } from "../user-service.service";

@Component({
    selector: "app-admin-dashboard",
    templateUrl: "./admin-dashboard.component.html",
    styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
    addUser: FormGroup;
    successMssg;
    errorMssg;

    constructor(
        private fb: FormBuilder,
        public userService: UserServiceService
    ) {}

    ngOnInit() {
        this.addUser = this.fb.group(
            {
                name: ["", Validators.required],
                email: ["", [Validators.required, Validators.email]],
                password: ["", [Validators.required, Validators.minLength(6)]],
                confirmPassword: ["", Validators.required],
            },
            {
                validator: MustMatch("password", "confirmPassword"),
            }
        );
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.addUser.controls;
    }

    onSubmit() {
        if (!this.addUser.invalid) {
            let data = {
                name: this.f.name.value,
                password: this.f.password.value,
                type: "user",
                email: this.f.email.value,
            };
            this.userService.addUser(data).subscribe(
                (resp) => {
                    console.log(resp);
                    this.successMssg = true;
                },
                (err) => {
                    console.log(err);
                    this.successMssg = false;
                    this.errorMssg = err;
                }
            );
        }
    }

    onReset() {
        this.addUser.reset();
    }
}
