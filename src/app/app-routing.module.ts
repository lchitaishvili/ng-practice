import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostListResolver } from './resolvers/posts-list.resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'posts',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
