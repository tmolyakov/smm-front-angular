import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { UserInterface } from '../../dataproviders/api/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  model: UserInterface = { email: 'email@email.com', password: 'password', uuid: 'uuid' };

  constructor(public service: UserService) { }

  ngOnInit(): void {
    console.log('ng on init');
    this.service.get('test')
      .subscribe(user => console.log(user));
  }

  onSubmit() {
    console.log('on submit');
  }
}
