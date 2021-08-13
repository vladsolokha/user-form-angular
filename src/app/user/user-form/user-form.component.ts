import { Component, Input, OnInit } from '@angular/core';
import {User, UserState} from "../../core/store/user/user.state";

@Component({
  
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user: UserState | undefined;

  constructor(   ) { }

  ngOnInit(): void { };
  
  }


