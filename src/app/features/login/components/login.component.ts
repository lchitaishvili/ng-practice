import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ILoginData } from '../interfaces/login-data.interface';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public errorOccured: Subject<boolean> = new Subject();
  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  public onClickLogIn(): void {
    if (this.form.valid) {
      this.loginService.isLoggedIn = true;
      this.loginService.setUserInfo(this.form.value as ILoginData);
      this.router.navigateByUrl('/dashboard');
    }
  }

}
