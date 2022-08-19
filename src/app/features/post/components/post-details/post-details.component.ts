import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailsComponent {
  @Input() post: IPost = {title: '', body: '', id: '', userId: ''}

  constructor() { }
}
