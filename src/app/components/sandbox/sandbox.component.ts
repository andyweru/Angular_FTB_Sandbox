import { Component } from '@angular/core';


@Component({
    selector:'sandbox',
    templateUrl:'./sandbox.component.html',
    styleUrls:['./sandbox.component.css']
})

export class SandboxComponent{
    people = ['Rick', 'Daryl', 'Carl', 'Glen'];
    
    people2 = [
        {
            firstName:'Rick',
            lastName: 'Grimes'
        },
        {
            firstName:'Daryl',
            lastName: 'Dixon'
        },
        {
            firstName:'Carl',
            lastName: 'Grimes'
        },
        {
            firstName:'Glen',
            lastName: 'Rhee'
        }
    ];

    constructor(){
        this.people[2] = 'Carol';
    }
}

