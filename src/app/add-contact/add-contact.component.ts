import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IContactModel } from '../models/contact.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  public data: IContactModel = {
    email: '',
    firstname: '',
    lastname: '',
    phonenumber: null
  };

  constructor(
    private _apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  public addContactPerson(): void {
    this._apiService.addContactPerson(this.data).subscribe(i => {
      console.log(i);
    });
  }

}
