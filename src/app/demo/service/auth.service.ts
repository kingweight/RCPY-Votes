import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    login(email, passowrd) {
        return this.http.post<any>('assets/demo/data/countries.json',{email, passowrd})
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
}
