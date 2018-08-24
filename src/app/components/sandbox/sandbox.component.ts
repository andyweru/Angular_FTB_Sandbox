import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
    selector:'sandbox',
    templateUrl:'./sandbox.component.html',
    styleUrls:['./sandbox.component.css']
})

export class SandboxComponent{
 
    users:any[];
    user = {
        name:'',
        email:'',
        phone:''
    }

    constructor(public dataService:DataService){
        this.dataService.getUsers().subscribe(users => {
            // console.log(users);
            this.users = users;
        })
    }

    onSubmit(){
        this.dataService.adduser(this.user).subscribe(user => {
            console.log(user);
            this.users.unshift(user);
        });
    }
 
}

