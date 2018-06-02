import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }
    getUser() {
        return this.httpClient.get('http://localhost:3000/users');
    }
}
