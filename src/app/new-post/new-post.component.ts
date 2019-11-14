import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { PostService } from '../services/post.service';

import { Post } from '../models/post.models';



@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {


	postForm : FormGroup;
	errorMessage : string;


	constructor(private formBuilder : FormBuilder, private postService : PostService, private router : Router) { }

	ngOnInit() {
		this.initForm();
	}

	initForm(){
		this.postForm = this.formBuilder.group({
			title: ['', Validators.required],
			content: ['', Validators.required]
		});
	}

	onSavePost(){
		const title = this.postForm.get("title").value; // On récupère la valeur dans le form 
	  	const content = this.postForm.get("content").value;
	  	const date = new Date();
	  	const newPost = new Post(title,content,0,date);

	  	this.postService.addPost(newPost);
  		this.router.navigate(["post"]);
	}

}
