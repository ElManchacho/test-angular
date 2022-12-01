import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from '../../@shared/services/post/post.service';
import { Post } from '../../class/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  private routeSub: Subscription;

  private idPost: string = 'NaN';

  getPostPromise:Promise<Post> | undefined

  post : Post;

  constructor(private route: ActivatedRoute, private postService:PostService) {
    this.post = {id:'NaN',idCreator:'NaN',creationDate:new Date(),title:'NaN',text:'NaN'}
    this.routeSub = this.route.params.subscribe(params => {
      this.idPost = params['id']
    });
    this.getPostPromise = this.postService.getPostById(this.idPost)
    this.getPostPromise.then((value) => {
      this.post = value
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
