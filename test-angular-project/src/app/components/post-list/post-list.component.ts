import { Component, OnInit } from '@angular/core';
import { routes } from 'src/environments/apiRoutes';
import { Post, PostList } from 'src/app/class/post';
import { PostService } from 'src/app/@shared/services/post/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList:Post[];

  getPostsPromise:Promise<Post[]> | undefined

  constructor(private postService:PostService) {
    this.postList = []
  }

  ngOnInit(): void {
    this.getPostsPromise = this.postService.getPosts()

    this.getPostsPromise.then((value)=>{
      this.postList = value
    })
  }
}
