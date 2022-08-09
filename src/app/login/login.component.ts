import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public errorOccured: Subject<boolean> = new Subject();
  public form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
