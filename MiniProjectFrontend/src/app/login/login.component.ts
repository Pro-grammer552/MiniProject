import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  myForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });


  constructor(private fb: FormBuilder, private loginservice: LoginServiceService, private router: Router) { }


  ngOnInit(): void {

  }


  goBack() {

    this.router.navigate(['']);
  }



  onSubmit() {
    console.log(this.myForm.value);

    const user = this.myForm.value;

    let request = {
      "firstName": this.myForm.value.firstName,
      "lastName": this.myForm.value.lastName,
      "email": this.myForm.value.email
    }

    this.loginservice.postRequestWithToken('login/saveLogins', user).subscribe(
      (data) => {
        alert('User save');
      });
  }

}