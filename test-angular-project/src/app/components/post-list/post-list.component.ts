import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post, PostList } from 'src/app/class/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  private apiString: string

  postList:Post[];

  constructor() {
    this.apiString = environment.apiUrl + '/post/list'
    this.postList = []

  }

  private async getUsers():Promise<void> {
    try {
      const response = await fetch(this.apiString, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      this.postList = ((await response.json()) as PostList).posts;
    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);
      } else {
        console.log('unexpected error: ', error);
      }
    }
  }


  ngOnInit(): void {
    this.getUsers()
  }



  ngOnDestroy(): void {

  }

}
