import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { User } from '../models/user.state';
import { PullFacadeService } from './../services/pull-facade.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  searchTerm = new FormControl();
  users$: Observable<User[]>;

  constructor(public pullFacadeService: PullFacadeService) { }

  ngOnInit(): void {
    this.searchTerm.setValue(this.pullFacadeService.criteria, { emitEvent: false });
    const userChanges$ = this.searchTerm.valueChanges.pipe(
      tap(_ => this.users$ = null),
      debounceTime(300),
      distinctUntilChanged()
    )
    userChanges$.subscribe(value => {
      this.pullFacadeService.updateCriteria(value);
      this.findAllUsers$();
    })
  }


  findAllUsers$() {
    this.users$ = this.pullFacadeService.findAllUsers();
  }

  showPageSize() {
    alert(this.pullFacadeService.pagination.selectedSize)
  }

  setPageSize(size: number) {
    this.pullFacadeService.setPageSize(size)
  }
}
