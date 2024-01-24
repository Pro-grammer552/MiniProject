import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }




  postRequestWithToken(url: string, param: {}) {

    console.log(param);
    console.log(url)

    const httpOptionsWithToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post(this.apiUrl + url, param, httpOptionsWithToken)
  }

}