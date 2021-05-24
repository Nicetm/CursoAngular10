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
  //public data = CONST_LOGIN_PAGE;
  public loginForm;
  public loginSubmitted = false;
  public patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
    // this.loginForm = this.data.FORM; // Data usada con ngModel
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.patternEmail)]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
      /*person: this.formBuilder.group({
        name: ['', Validators.required],
        lastname: ['', Validators.required]
      }),
      interests: this.formBuilder.array([
        this.formBuilder.control('', Validators.required)
      ])*/
    });
  }

  ngOnInit() {
    this.loginForm.get('email').setValue('pcsm.cs@gmail.com');
  }

  get fl() {
    return this.loginForm.controls;
  }

  get fp() {
    return this.loginForm.controls.person.controls;
  }

  get interests() {
    return this.loginForm.get('interests') as FormArray;
  }

  addInterets() {
    this.interests.push(this.formBuilder.control('', Validators.required))
  }

  removeInterest(index: number) {
    this.interests.removeAt(index);
  }

  authenticate() {
    this.loginSubmitted = true;
    if(!this.loginForm.valid) {
      return;
    }
    //console.log('auth', this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe((r: IApiError ) => {
      console.log(r.msg)
    })
  }

  // Validacion con ngModel
  // get isValidForm() {
  //   return (this.loginForm.email.isValid() && this.loginForm.password.isValid());
  // }
}
