import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent {

  @Input() posts: IPost[] = [];
  @Output() postClicked = new EventEmitter<IPost>();

  constructor() { }

  public onClickPost(post: IPost): void {
    this.postClicked.emit(post);
  }

}
