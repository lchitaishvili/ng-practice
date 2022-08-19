import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListResolver } from './resolvers/posts-list.resolver.service';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
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
