import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService{


    constructor(public http:Http){

    }

    getUsers(){
        return this.http.get('http://jsonplaceholder.typicode.com/users')
            .pipe(map(res => res.json()));
    }

    adduser(user){
        return this.http.post("http://jsonplaceholder.typicode.com/users", user)
            .pipe(map(res => res.json()));
    }

} 