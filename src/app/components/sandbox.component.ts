import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
    selector:'sandbox',
    template:`<h1>Hello world</h1> `
})

export class SandboxComponent{
    customer:Customer;
    customers:Customer[];

    constructor(){
      this.customer = {
          id:1,
          name:'John Doe',
          email:'john@gmail.com'
      }

      this.customers = [
        {
            id:1,
            name:'John Doe',
            email:'john@gmail.com'
        },
        {
            id:2,
            name:'Brad Trav',
            email:'bradT@gmail.com'
        },
        {
            id:3,
            name:'Young Wesh',
            email:'youngW@gmail.com'
        }
      ];
    }
}

