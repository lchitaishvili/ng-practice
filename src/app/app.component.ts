import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, catchError, delay, of, retry, Subject, tap, timer } from 'rxjs';
import { ILoginData } from './interfaces/login-data.interface';
import { IPost } from './interfaces/post.interface';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'test-app';

  public posts: BehaviorSubject<IPost[]> = new BehaviorSubject(<IPost[]>[]);
  public errorOccured: Subject<boolean> = new Subject();
  public form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private listService: ListService) {}

  ngOnInit(): void {
  }

  public onClickGet(): void {
    this.listService.getList().pipe(
      tap(response => this.posts.next(response)),
      retry({ count: 5, delay: 1000 }),
      catchError(() => {
        this.errorOccured.next(true);
        return of([]);
      })
    ).subscribe();
  }

  public onClickPost() {
    this.listService.sendFormData(this.form.value as ILoginData).subscribe();
  }
}
