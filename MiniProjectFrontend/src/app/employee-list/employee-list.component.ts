import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeServiceService } from '../employee-service.service';
import { NavigationExtras, Router } from '@angular/router';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employees:Employee[]=[];
  constructor(private employeeService: EmployeeServiceService,private router: Router) { }

  

  ngOnInit(): void {
    this.getEmployeeList();
   
    

  }

  private getEmployeeList() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }


  logins() {
    console.log('Navigating to login page');
    this.router.navigate(['/login']);
  }

  views(id:number) {
    console.log('Navigating to View page');
    this.router.navigate(['/view',id]);
  }

  updateEmloyee(id:number) {
    console.log('Navigating to Edit page');
    this.router.navigate(['edit',id]);
  }


  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployeeList();
    })
  }
}
