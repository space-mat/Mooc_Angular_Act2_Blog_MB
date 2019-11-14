import { Component, Input, OnInit, OnDestroy} from '@angular/core';

import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs/Subscription'

import { Post } from '../models/post.models';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
	

  postLoveIt = 5;

  posts : Post[];
  postSubscription : Subscription;

  constructor(private postService : PostService) { 

  }


  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (postY : Post[]) => {
        this.posts = postY;
      }
    );

    this.postService.emitPostSubject();

    
  }


  loveItplus(post : Post){
  		this.postService.loveItplusService(post);
  }

  loveItmoins(post : Post){
  		this.postService.loveItmoinsService(post);
  }

  rmPost(post : Post){
      this.postService.removePost(post);
  }









  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
