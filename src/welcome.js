//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  heading = 'Hello, my friend!';
  firstName = '';
  ageUser = '';
  previousValue = this.fullName;

  submit() {
    return `Hello ${this.firstName}`;
  }

}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
