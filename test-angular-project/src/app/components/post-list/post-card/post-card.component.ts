import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/@shared/services/user/user.service';
import { Post } from 'src/app/class/post';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post!: Post;

  getCreatorPromise:Promise<User> | undefined

  creator:User

  constructor(private userService:UserService) {
    this.creator = {id:'NaN', name:'NaN', age:0,pseudo:'NaN', birthDate:new Date(), password:'NaN'}
  }

  ngOnInit(): void {
    if (this.post.text.length>100){
      this.post.text = this.post.text.slice(0, 100)+'...'
    }
    this.getCreatorPromise = this.userService.getUserById(this.post.idCreator)
    this.getCreatorPromise.then((value) => {
      this.creator= value
    })
  }

}
