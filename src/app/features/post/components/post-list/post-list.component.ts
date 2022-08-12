import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IPost } from '../../interfaces/post.interface';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts: BehaviorSubject<IPost[]> = new BehaviorSubject([] as IPost[]);

  constructor(private listService: ListService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts.next(this.route.snapshot.data['posts']);
  }

  public onPostClick(post: IPost): void {
    this.listService.selectedPost.next(post);
    this.router.navigate(['posts', post.id]);
  }

}
