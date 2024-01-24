  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { EmployeeServiceService } from '../employee-service.service';
  import { Employee } from '../Employee';

  @Component({
    selector: 'app-view-details',
    templateUrl: './view-details.component.html',
    styleUrls: ['./view-details.component.css']
  })
  export class ViewDetailsComponent implements OnInit {

    id: any;
    employee: Employee[] = [];
  
    constructor(private route: ActivatedRoute, private employeService: EmployeeServiceService,private router:Router) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.employeService.getEmployeeById(this.id).subscribe(data => {
        this.employee = [data];
      });
    }

    goBack() {

      this.router.navigate(['']);
    }
  }