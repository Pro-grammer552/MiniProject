import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  userId: number = 1;
  

  constructor(
    private fb: FormBuilder,
    private empser: EmployeeServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.userId = +params['id'];
    });


    this.empser.getEmployeeList().subscribe(employees => {
      const user = employees.find(emp => emp.id === this.userId);
      if (user) {
        this.myForm.patchValue({
          firstName: user.firstname,
          lastName: user.lastName,
          email: user.emailId
        });
      }
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

  onSubmit() {
    console.log('Form values', this.myForm.value);
    const updatedData = this.myForm.value;
  
    this.empser.updateEmployee(this.userId, updatedData).subscribe(
      data => {
        console.log('Update successful', data);
     
      },
      error => {
        console.error('Update failed', error);
        this.goBack(); 
      }
    );
  }
}