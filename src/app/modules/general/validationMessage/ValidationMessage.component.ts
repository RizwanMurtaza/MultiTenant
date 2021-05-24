import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/services/ValidationService';
@Component({
  selector: 'control-messages',
  template: `<div class="text-center text-danger p-2">{{this.errorMessage}}</div>`
})
export class ValidationMessageComponent {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
          if(this.control.errors[propertyName].message !=='')
          {
            
            return this.control.errors[propertyName].message;
          }
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}