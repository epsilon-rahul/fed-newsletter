import { Injectable } from "@angular/core";
import { HttpService } from "../shared/http/http.service";

@Injectable({
    providedIn: "root",
})
export class UserServiceService {
    constructor(public httpClient: HttpService) {}

    addUser(data) {
        return this.httpClient.post("users", data, {});
    }
}
