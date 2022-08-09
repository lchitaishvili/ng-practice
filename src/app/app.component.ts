import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'test-app';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe( event => {
      if (event instanceof NavigationStart) {
        console.log('NAVIGATION STARTED!');
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationError ||
        event instanceof NavigationCancel
        ) {
          console.log('NAVIGATION ENDED!')
      }
    }
    );
  }
}
