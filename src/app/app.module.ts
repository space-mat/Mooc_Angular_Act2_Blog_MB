import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { PostService } from './services/post.service';


import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from  './post-list-item-component/post-list-item-component.component';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes : Routes =[
  { path:'post', component: PostListComponentComponent },
  { path:'new', component: NewPostComponent },
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  { path: '**', redirectTo: 'post' }
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

