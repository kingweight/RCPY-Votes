import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    regitrationStatus: string;
    constructor(private http: HttpClient) { }

    //{email, passowrd}
    login(email, passowrd) {
        return this.http.get<any>('/assets/demo/data/login.json',)
            .toPromise()
    }

    register(req) {
        return this.http.post<any>('assets/demo/data/register.json', req)
            .toPromise()
            .then(res => res.data as any[])
            .then(data => {
                console.log(data);
            });
    }
}
