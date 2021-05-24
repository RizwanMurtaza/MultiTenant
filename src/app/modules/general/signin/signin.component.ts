import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,ReactiveFormsModule , FormControl, FormsModule } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { LoginForm } from 'src/app/forms/Login';
import { AuthenticationService } from 'src/app/services/Auth';
import { LoginResponse } from 'src/app/models/Login';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeValue} from '@angular/platform-browser';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    authForm: FormGroup;
    loginForm: LoginForm;
    loading = false;
    submitted = false;
    returnUrl: string;
    authenticationError:boolean;
    error:string;
    success:string;
    isLoginForm: boolean;
    isTwoFactorForm: boolean;
    isForgotPasswordForm:boolean;
    isRegisterForm: boolean;
    PasswordToggle: boolean;
    loginResponse: LoginResponse;
    usernameHtml : string;

    constructor( private formBuilder: RxFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.handleTransfer();
    this.signInFormSetting();
    this.authenticationError = false;
  }


  signInFormSetting()
  {
      this.clearMessages();
      this.isLoginForm = true;
      this.authForm = null;
      this.loginForm = new LoginForm();
      this.authForm = this.formBuilder.formGroup(this.loginForm);
      return false;
  }

  clearMessages()
  {
      this.success ='';
      this.error ='';
  }
  get f() { return this.authForm.controls; }
    onSubmit() {
        this.loading = true;
        this.submitted = true;
        if(this.isLoginForm)
        {
            return this.handleAuthentication();
        }
        if (this.authForm.invalid) {
            return;
        }

    }
    onSubmit1() {
        this.authenticationService.justTest()
            .pipe()
            .subscribe(result => {
                console.log(result);

                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
    handleTransfer()
    {
        const currentUser = this.authenticationService.currentUserValue;
        const token = this.authenticationService.getToken;
        if (currentUser && token) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        return false;
    }

    handleAuthentication()
    {
        this.loading = true;
        this.clearMessages();

        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe()
            .subscribe(result => {
                    this.loginResponse = result;
                    this.onSubmit1();
                    if(this.loginResponse.IsAuthenticated)
                    {
                        this.router.navigate(['/home']);
                    }
                    else if(this.loginResponse.IsAccountLocked)
                    {
                        this.error = this.loginResponse.AuthMessage;
                    }
                    else
                    {
                        this.authenticationError = true;
                        this.error = this.loginResponse.AuthMessage;
                    }
                    if(this.error!=='')
                    {
                        console.log('finally error is :' + this.error);
                    }
                    // this.router.navigate([this.returnUrl]);
                    this.loading = false;
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
    togglePassword() {
      this.PasswordToggle = !this.PasswordToggle;
    }

}
