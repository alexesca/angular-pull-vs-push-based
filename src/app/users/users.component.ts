import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserState } from '../models/user.state';
import { PushFacadeService } from './../services/push-facade.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  searchTerm: FormControl;
  vm$: Observable<UserState> = this.pushFacadeService.vm$;

  constructor(public pushFacadeService: PushFacadeService) { }

  ngOnInit() {
    const { criteria } = this.pushFacadeService.getStateSnapshot();

    this.searchTerm = this.pushFacadeService.buildSearchTermControl();
    this.searchTerm.patchValue(criteria, { emitEvent: false });
  }
}
