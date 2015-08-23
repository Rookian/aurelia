import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Welcome {
    constructor(router){
        this.router = router;
    };
    
  get fullName() {
    if (this.firstName && this.lastName) {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  submit() {
    this.router.navigateToRoute('test', {name: this.fullName} );
  }
}