import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from "@angular/router";
import { IContactModel } from '../models/contact.model';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
  public data: IContactModel;

  constructor(
    private _apiService: ApiService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    const id = this._route.snapshot.paramMap.get("id");
    console.log(id)
    this._apiService.getContactById(id).subscribe(i => {
      this.data = i;
    })
  }

  ngOnInit(): void {
  }

  updateContact(): void {
    this._apiService.updateContactPerson(this.data.id, this.data).subscribe(i => {
      this._router.navigate(['/'])
    });

  }

}
