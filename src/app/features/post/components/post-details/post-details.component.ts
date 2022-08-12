import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPost } from '../../interfaces/post.interface';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  public post$: BehaviorSubject<IPost> = new BehaviorSubject({id: '', userId: '', title: '', body: ''});

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.post$ = this.listService.selectedPost;
  }
}
