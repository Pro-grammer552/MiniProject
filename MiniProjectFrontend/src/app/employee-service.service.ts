import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {


  constructor(private httpclient: HttpClient) { }

  private apiUrl1 = "http://localhost:8080/login/getAllLogins";
  getEmployeeList(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(`${this.apiUrl1}`);

  }

  private apiUrl2 = "http://localhost:8080/login/deleteLogin";
  deleteEmployee(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.apiUrl2}/${id}`);
  }

  private apiUrl3 = "http://localhost:8080/login/updateLogin";
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpclient.put(`${this.apiUrl3}/${id}`, employee);
  }

  private apiUrl4 = "http://localhost:8080/login/view";
  getEmployeeById(id: number): Observable<any>{
    return this.httpclient.get<any>(`${this.apiUrl4}/${id}`);
  }
}
