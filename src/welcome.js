//import {computedFrom} from 'aurelia-framework';

// opening
export class Welcome {
  heading = 'Hello, my friend!';
  nameUser = '';
  ageUser = '';
  previousValue = this.fullName;

  submit() {
    return `Hello ${this.nameUser}`;
  }

}

// converter
export class RgbToHexValueConverter {
  toView(rgb) {
    return "#" + (
      (1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b
    ).toString(16).slice(1);
  }

  fromView(hex) {
    let exp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
        result = exp.exec(hex);
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    };
  }
}

// colors
export class Color {
  rgb = { r: 146, g: 39, b: 143 };
}