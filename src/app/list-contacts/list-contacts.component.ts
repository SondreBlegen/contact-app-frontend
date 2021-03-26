import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IContactModel } from '../models/contact.model';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {
  public data: IContactModel[] = [];

  constructor(
    private _apiService: ApiService
  ) {
    this._apiService.getContactPersons().subscribe((i) => {
      this.data = i;
    });
  }

  ngOnInit(): void {
  }

}
