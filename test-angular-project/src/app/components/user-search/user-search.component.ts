import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/@shared/services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  userPseudosList:string[];

  searchedUser:any;

  postForm = new FormGroup({
    pseudo: new FormControl("", Validators.required)
  });

  getUsersPseudoPromise:Promise<string[]> | undefined

  constructor(private userService:UserService) {
    this.userPseudosList = []
  }

  ngOnInit(): void {
    this.getUsersPseudoPromise = this.userService.getUsersPseudos()

    this.getUsersPseudoPromise.then((value)=>{
      this.userPseudosList = value
    })
  }

  onSubmit(){
    const searchPseudo:string = this.postForm.get("pseudo")?.value
    const searchUser = this.userService.getUserByPseudo(searchPseudo)
    searchUser.then((value)=>{
      this.searchedUser = value
    })
  }

}
