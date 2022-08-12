import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsRoutingModule } from './posts-routing.module';



@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostModule { }
