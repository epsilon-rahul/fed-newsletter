import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    loginForm = this.fb.group({
        email: ["", Validators.required],
        password: ["", [Validators.required]],
    });

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private myRoute: Router
    ) {
        if (this.authService.isLoggednIn()) {
            this.myRoute.navigate(["home"]);
        }
    }

    ngOnInit() {}

    onSubmit() {
        // TODO: Use EventEmitter with form value

        if (this.loginForm.invalid) {
            console.log("its coming here");
            return;
        } else {
            let data = {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password,
            };
            console.log("its coming erer");
            this.authService.login(data).subscribe(
                (response) => {
                    this.authService.sendToken(response, response["status"]);
                    let getCurrent = () => this.authService.getRole();
                    if (getCurrent() === "admin") {
                        this.myRoute.navigate(["admin"]);
                    } else {
                        this.myRoute.navigate(["home"]);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }
}
