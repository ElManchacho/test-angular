import { Injectable } from '@angular/core';
import { routes } from 'src/environments/apiRoutes';
import { Post, PostList } from 'src/app/class/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  async getPosts():Promise<Post[]> {
    const response = await fetch(routes.postListRoute, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    return ((await response.json()) as PostList).posts;
  
}
}
