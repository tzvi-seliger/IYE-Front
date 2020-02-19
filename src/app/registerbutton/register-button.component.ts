import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators
} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.css']
})
export class RegisterButtonComponent implements OnInit {
  constructor(private fb: FormBuilder, private authorization: AuthService) {}
  // @Output() auth = new EventEmitter<any>();
  // message = 'Register Now!';
  isLoggedIn = false;
  loginPressed = false;
  loginButtonVisible = true;
  LoginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });
  showLogin() {
    this.loginPressed = true;
    this.loginButtonVisible = false;
  }

  login() {
    this.isLoggedIn = true;
  }

  onSubmit() {
    this.authorization.logIn(
      this.LoginForm.controls.userName.value,
      this.LoginForm.controls.password.value
    );
        // console.log(`username is ${this.LoginForm.controls.userName.value}`);
    // console.log(`password is ${this.LoginForm.controls.password.value}`);
    // cred = {
    //   un: this.LoginForm.controls.userName.value,
    //   pw: this.LoginForm.controls.password.value
    // };
    // this.auth.emit(cred);
  }
  ngOnInit() {}
}
