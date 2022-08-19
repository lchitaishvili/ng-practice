import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PostComponent } from './components/post/post.component';



@NgModule({
  declarations: [
    PostListComponent,
    PostDetailsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostModule { }
