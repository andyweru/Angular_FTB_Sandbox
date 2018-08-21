import { Component } from '@angular/core';


@Component({
    selector:'sandbox',
    templateUrl:'./sandbox.component.html',
    styleUrls:['./sandbox.component.css']
})

export class SandboxComponent{
    birthday = new Date(1996, 10, 9);
    percent = 0.45;
}

