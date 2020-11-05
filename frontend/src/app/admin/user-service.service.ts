import { Injectable } from "@angular/core";
import { HttpService } from "../shared/http/http.service";
import { User } from './user';

@Injectable({
    providedIn: "root",
})
export class UserServiceService {
    constructor(public httpClient: HttpService) {}

    addUser(data) {
        return this.httpClient.post("users", data, {});
    }

    getUsers(){
        return this.httpClient.get('users');
    }

    updateUser(id, data) {
        return this.httpClient.put('users/' + id, data, {});    
    }

    deleteUser(id) {
        return this.httpClient.delete('users/' + id);
    }
}
