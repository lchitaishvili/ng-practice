import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, Subject } from 'rxjs';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';
  public selectedPost: BehaviorSubject<IPost> = new BehaviorSubject({id: '', userId: '', title: '', body: ''});

  constructor(private http: HttpClient) { }

  public getList(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.baseUrl + '/posts');
  }
}
