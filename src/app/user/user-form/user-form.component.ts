import { Component, Input, OnInit } from '@angular/core';
import {UserSearchComponent} from 'src/app/user/user-search/user-search.component'
import { User } from 'src/app/core/store/user/user.state';

@Component({
  
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  
  @Input() selectedUser?: User;
    

  // name: User = {
  //   firstName: '',
  //   middleName: '',
  //   lastName: '',
  // }

  constructor(   ) { }

  ngOnInit(): void { };
  
  }


