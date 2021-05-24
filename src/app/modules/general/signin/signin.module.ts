import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin-routing.module';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationMessageModule } from '../validationMessage/validationMessage.Module';

@NgModule({
  imports: [
    CommonModule,
    SigninRoutingModule,
    RxReactiveFormsModule,
    ReactiveFormsModule,
    ValidationMessageModule
  ],
  exports: [
    SigninComponent
  ],
  declarations: [
    SigninComponent
  ],
  providers: [
  ],
})
export class SigninModule { }
