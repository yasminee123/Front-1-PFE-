import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private Url = 'http://localhost:5000/';
  constructor(private http: HttpClient) { }
  getAllClients() {
    let data = this.http.get<any>(this.Url+'api/ClientVue');
    return data;
  }
}
 