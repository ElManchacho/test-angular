import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/@shared/services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userPseudosList:string[];

  searchedUser:any;

  postForm = new FormGroup({
    pseudo: new FormControl("", Validators.required)
  });

  getUserPromise:Promise<string[]> | undefined

  constructor(private userService:UserService) {
    this.userPseudosList = []
  }

  ngOnInit(): void {
    this.getUserPromise = this.userService.getUsersPseudos()

    this.getUserPromise.then((value)=>{
      this.userPseudosList = value
    })
  }

  onSubmit(){
    const searchPseudo:string = this.postForm.get("pseudo")?.value
    const searchUser = this.userService.getUser(searchPseudo)
    searchUser.then((value)=>{
      this.searchedUser = value
    })
  }

}
