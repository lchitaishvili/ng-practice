import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ILoginData } from '../interfaces/login-data.interface';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private baseUrl = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  public getList(): Observable<IPost[]> {
    const options = {
      headers: new HttpHeaders({
        'custom-header': '123'
      })
    }
    return this.http.get<IPost[]>(this.baseUrl + '/posts', options);
  }

  public sendFormData(payload: ILoginData) {
    const params = new HttpParams().append('custom-param', 'Luka').append('vazha', '111');
    
    return this.http.post(this.baseUrl + '/posts', payload, { params: params });
  }
}
