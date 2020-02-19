import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../services/user.service';
import { User } from './../models/User';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Form,
  Validators
} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private us: UserService, private fb: FormBuilder, public auth: AuthService) {}
  @Input() header: string;
  user: User;
  credentials: any;
  isLoggedIn = false;
  imageUpload: FormGroup;
  image: Blob;
  // @Input() username: string;
  // @Input() pw: string;
  logIn() {
    this.us.getUser(this.credentials.un, this.credentials.pw).subscribe({
      next: user => {
        this.user = user;
        this.isLoggedIn = true;
      }
    });
    // this.getImageFromAPI();
  }

  // getImageFromAPI() {
  //   this.us.getImage().subscribe({
  //     next: data => {
  //       this.image = data.blob();
  //     }
  //   });
  // }

  // confirmLogin() {
  //   this.logIn();
  //   console.log(this.isLoggedIn);
  //   console.log(this.user);
  //   // console.log(this.image);

  // }

  // getImage() {
  //   console.log(this.imageUpload.value.imageFile);
  // }

  // onAuth(cred: any) {
  //   this.credentials = cred;
  //   console.log(this.credentials);
  //   this.confirmLogin();
  // }
  // err() {
  //   document.querySelector('#email')['style'].border = '1px solid red';
  // }

  //   document.querySelector("#startbutton").addEventListener("click", function () {
  //     !(document.querySelector("#email").value) == "" ? window.location = "start.html" : err()
  // })

  ngOnInit(): void {
    // this.imageUpload = this.fb.group({
    //   imageFile: ['', Validators.required]
    // });
  }
}
