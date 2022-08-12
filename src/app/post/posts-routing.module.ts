import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListResolver } from '../resolvers/posts-list.resolver.service';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    children: [
      {
        path: ':postId',
        component: PostDetailsComponent
      }
    ],
    resolve: {
      posts: PostListResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
