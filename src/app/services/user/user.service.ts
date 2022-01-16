import { Injectable } from '@angular/core';
import { UserDataProvider, UserInterface } from '../../dataproviders/api/user';
import { BaseEntityService } from '../base-entity.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseEntityService<UserInterface>{
  constructor(protected provider: UserDataProvider) {
    super();
  }
}
