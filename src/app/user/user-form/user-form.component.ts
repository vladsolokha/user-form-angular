import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserState } from 'src/app/core/store/user/user.state';


@Component({
  
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
  ) { }
  
  userId = this.route.snapshot.paramMap.get("id");
  firstNameUrl = `api/user/getFirstname/${this.userId}`;
  
  firstName = this.httpClient.get(this.firstNameUrl);
  middleName = 'judy';
  lastName = 'hello';
  
  ngOnInit(): void {
    
    
  }
  }


