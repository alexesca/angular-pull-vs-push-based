import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MyUrl } from './../models/url.class';

import { User, Pagination, RandomUserResponse } from './../models/user.state';

@Injectable({
  providedIn: 'root'
})
export class PullFacadeService {

  users: User[] = [];
  criteria: string = 'ngDominican';
  pagination: Pagination = {
    selectedSize: 5,
    currentPage: 0,
    pageSizes: [5, 10, 20, 50]
  };

  constructor(private http: HttpClient) { }

  findAllUsers(): Observable<User[]> {
    const myUrl = MyUrl.buildApiUrl(this.criteria, this.pagination);
    const request$ = this.http.get<RandomUserResponse>(myUrl.url).pipe(
      map(response => response.results),
      tap(list => this.users = list)
    );
    return request$;
  }


  updateCriteria(value: string) {
    this.criteria = value;
  }

  setPageSize(size: number) {
    this.pagination.selectedSize = size
  }

}

