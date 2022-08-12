import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IPost } from "../interfaces/post.interface";
import { ListService } from "../services/list.service";

@Injectable({ providedIn: 'root' })

export class PostListResolver implements Resolve<IPost[]> {
  constructor(private listService: ListService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IPost[]> | Promise <IPost[]> | IPost[] {

    return this.listService.getList();
  }
}