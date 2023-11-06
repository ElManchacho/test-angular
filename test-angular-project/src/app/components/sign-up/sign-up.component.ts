import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { SignUpService } from 'src/app/@shared/services/signUp/sign-up.service';
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';
import { toast } from 'bulma-toast'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @Output() onSubmit: EventEmitter<User>;

  postForm: UntypedFormGroup

  submitted = false;

  baseImage!: File;

  constructor(public signUpService: SignUpService, public router: Router) {
    this.postForm = new UntypedFormGroup({
      pseudo: new UntypedFormControl("", Validators.required),
      email: new UntypedFormControl("",
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ]
      ),
      password: new UntypedFormControl("", Validators.required),
      checkPassword: new UntypedFormControl("", Validators.required)
    });
    this.onSubmit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  errorHandler(error: any): void {
    console.log(error)
  }

  signUp() {
    this.submitted = true;
    if (this.postForm.get('email')!.status == 'INVALID') {
      toast({
        message: 'Email must be a valid email address',
        type: 'is-danger',
        dismissible: true,
        pauseOnHover: true,
        position: 'top-right'
      })
      return;
    }
    let pwd = this.postForm.get('password')!.value;
    let pwd1 = this.postForm.get('checkPassword')!.value;
    if (pwd === pwd1) {
      const newUser: User = {
        pseudo: this.postForm.get('pseudo')!.value,
        email: this.postForm.get('email')!.value,
        password: this.postForm.get('password')!.value
      }
      //newUser.idImgPj = "profile.png"; // unable to store images in current json Database state
      /*
      this.authService.SignUp(newUser, pwd).then(successSignUp => {
        this.router.navigate(['/connexion']);
      });*/
      let body = {
        "name": "...",
        "pseudo": newUser.pseudo,
        "age": 0,
        "email": newUser.email,
        "birthDate": new Date(),
        "password": newUser.password
      }
      console.log(JSON.stringify(body))
      this.signUpService.signUp(JSON.stringify(body)).then(createdUser => {
        if (createdUser) {
          this.router.navigate(['/logIn']);
        }
      })

      /*

      if response is 400 (from API), give HTTP request response in a toast
      
      toast({
          message: 'error',
          type: 'is-danger',
          dismissible: true,
          pauseOnHover: true,
          position: 'top-right'
        })
      
      */

    }
    else {
      toast({
        message: 'Passwords doesn\'t match.',
        type: 'is-danger',
        dismissible: true,
        pauseOnHover: true,
        position: 'top-right'
      })
      return;
    }
  }

}
