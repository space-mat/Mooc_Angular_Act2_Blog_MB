import { Subject} from "rxjs/Subject";

import { Post } from '../models/post.models';




export class PostService{

	postSubject = new Subject<any[]>();

	private listPost : Post[] = [
		{
			title: "Titre1",
			content: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sollicitudin quam. Sed non vestibulum ex. Curabitur vitae mauris id velit eleifend semper at id ante. Donec ut orci varius, malesuada eros ut, commodo eros. In hendrerit mattis suscipit. Nulla lacinia tincidunt mauris, a rutrum ligula mollis quis. Quisque est enim, pulvinar eleifend lacinia vitae, vehicula in nisi. Nunc facilisis laoreet arcu, eu commodo diam rutrum non. Maecenas imperdiet ultricies velit sit amet elementum.",
			loveIts: 1,
			created_at: new Date() /*"Mon Nov 11 2019 00:16:36 GMT+0100 (heure normale d’Europe centrale)"*/
		},
		{
			title: "Titre2",
			content: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sollicitudin quam. Sed non vestibulum ex. Curabitur vitae mauris id velit eleifend semper at id ante. Donec ut orci varius, malesuada eros ut, commodo eros. In hendrerit mattis suscipit. Nulla lacinia tincidunt mauris, a rutrum ligula mollis quis. Quisque est enim, pulvinar eleifend lacinia vitae, vehicula in nisi. Nunc facilisis laoreet arcu, eu commodo diam rutrum non. Maecenas imperdiet ultricies velit sit amet elementum.",
			loveIts: 5,
			created_at: new Date() /*"Fri Nov 15 2019 00:16:36 GMT+0100 (heure normale d’Europe centrale)"*/
		},
		{
			title: "Titre3",
			content: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sollicitudin quam. Sed non vestibulum ex. Curabitur vitae mauris id velit eleifend semper at id ante. Donec ut orci varius, malesuada eros ut, commodo eros. In hendrerit mattis suscipit. Nulla lacinia tincidunt mauris, a rutrum ligula mollis quis. Quisque est enim, pulvinar eleifend lacinia vitae, vehicula in nisi. Nunc facilisis laoreet arcu, eu commodo diam rutrum non. Maecenas imperdiet ultricies velit sit amet elementum.",
			loveIts: -5,
			created_at: new Date() /*"Tue Nov 12 2019 00:16:36 GMT+0100 (heure normale d’Europe centrale)"*/
		}
	];


	constructor(){

	}

	emitPostSubject(){
		this.postSubject.next(this.listPost.slice());
	}

	removePost(post : Post){
		const postIndexToRemove = this.listPost.findIndex(
	  		(postEl) => {
	  			if(postEl === post){
	  				return true;
	  			}
	  		}
	  	);
		this.listPost.splice(postIndexToRemove, 1);
		this.emitPostSubject();
	}

	addPost(post : Post){
		this.listPost.push(post);
		this.emitPostSubject();
	}

	loveItplusService(post : Post){
		const postIndexLovePlus = this.listPost.findIndex(
	  		(postEl) => {
	  			if(postEl === post){
	  				return true;
	  			}
	  		}
	  	);
		this.listPost[postIndexLovePlus].loveIts += 1;
		this.emitPostSubject();
	}

	loveItmoinsService(post : Post){
		const postIndexLoveMoins = this.listPost.findIndex(
	  		(postEl) => {
	  			if(postEl === post){
	  				return true;
	  			}
	  		}
	  	);
		this.listPost[postIndexLoveMoins].loveIts -= 1;
		this.emitPostSubject();
	}



}


