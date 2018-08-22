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

} 