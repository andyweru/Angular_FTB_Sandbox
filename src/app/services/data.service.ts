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

    deleteuser(id){
        return this.http.delete('http://jsonplaceholder.typicode.com/users/'+id)
            .pipe(map(res => res.json()));
    }

    updateUser(user){
        return this.http.put('http://jsonplaceholder.typicode.com/users/'+user.id, user)
            .pipe(map(res => res.json()));
    }

} 