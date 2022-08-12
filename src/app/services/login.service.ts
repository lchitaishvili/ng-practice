import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILoginData } from '../interfaces/login-data.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLoggedIn = false;
  public userInfo: BehaviorSubject<ILoginData> = new BehaviorSubject({email: '', password: ''}) ;

  constructor() { }

  public setIsLoggedIn(val: boolean) {
    this.isLoggedIn = val;
  }

  public setUserInfo(val: ILoginData) {
    this.userInfo.next(val);
  }
}
