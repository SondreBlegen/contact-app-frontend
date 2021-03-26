import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IContactModel } from './models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080'

  constructor(
    private _http: HttpClient
  ) { }

  public getContactPersons(): Observable<IContactModel[]> {
    return this._http.get<IContactModel[]>(`${this.baseUrl}/contactpersons`);
  }

  public addContactPerson(data: IContactModel): Observable<any> {
    return this._http.post<any>(`${this.baseUrl}/contactpersons`, data);
  }

  public getContactById(id: string): Observable<IContactModel> {
    return this._http.get<IContactModel>(`${this.baseUrl}/contactpersons/${id}`,);
  }

  public updateContactPerson(id: string, data: IContactModel): Observable<any> {
    return this._http.put<any>(`${this.baseUrl}/contactpersons/${id}`, data);
  }


}
