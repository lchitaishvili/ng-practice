import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {

  public posts$: BehaviorSubject<IPost[]> = new BehaviorSubject([] as IPost[]);
  public selectedPost$: BehaviorSubject<IPost> = new BehaviorSubject({id: '', userId: '', title: '', body: ''});
  public detailsView$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts$.next(this.route.snapshot.data['posts']);
  }

  public onPostClick(post: IPost): void {
    this.selectedPost$.next(post);
    this.detailsView$.next(true);
  }

}
