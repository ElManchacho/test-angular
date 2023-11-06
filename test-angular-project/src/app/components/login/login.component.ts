import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  postForm: UntypedFormGroup

  constructor() {
    this.postForm = new UntypedFormGroup({
      login: new UntypedFormControl("", Validators.required),
      password: new UntypedFormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
  }

  login():void{
    console.log("Trying to log in with following :", this.postForm.controls['login'].value, this.postForm.controls['password'].value)
  }

}
