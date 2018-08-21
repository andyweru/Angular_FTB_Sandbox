import { Component } from '@angular/core';


@Component({
    selector:'sandbox',
    templateUrl:'./sandbox.component.html',
    styleUrls:['./sandbox.component.css']
})

export class SandboxComponent{
    imageUrl = '../../assets/pic.png';
    isUnchanged:boolean = false;
}

