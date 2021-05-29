import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IApiError } from '@data/interfaces/api/iapi-error.metadata';
import { AuthService } from '@data/services/api/auth.service';

@Component({
  selector: 'app-login-form, [app-login-form]',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{
  public loginForm;
  public loginSubmitted = false;
  public patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public serviceError: boolean;
  public serviceErrorMsg: string;

  constructor(private formBuilder: FormBuilder,public authService: AuthService) {
    this.serviceError = false;
    this.serviceErrorMsg = "";
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.patternEmail)]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }

  ngOnInit() {
    this.loginForm.get('email').setValue('pcsm.cs@gmail.com');
  }

  get fl() {
    return this.loginForm.controls;
  }
  
  authenticate() {
    this.loginSubmitted = true;
    if(!this.loginForm.valid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe((res: IApiError ) => {
      if (res.error) {
        this.serviceError = true;
        this.serviceErrorMsg = res.msg;
        console.log(this.serviceError, this.serviceErrorMsg)
      }
    })
  }
}
