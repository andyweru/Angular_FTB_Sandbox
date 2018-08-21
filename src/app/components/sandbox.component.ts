import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`<h1>Hello world</h1> `
})

export class SandboxComponent{
    name:string = 'John Doe';
    age:number = 35;
    hasChildren:boolean = true;
    myNumbersArray:number[] = [1,2,3];
    myStringArray:string[] = ['hello', 'world'];
    city:any = 'Boston';
    myAnyArray:any[] = [1,2,3,"hello"];
    myTuple: [string, number] = ['hello', 3];
    unusable: void = undefined;
    u: undefined = undefined;
    n: null = null;

    constructor(){
        this.myNumbersArray = [1,2,3];
    }
}