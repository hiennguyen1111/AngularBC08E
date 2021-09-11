import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  template: `
    <div class="container">
      <div class="card w-50">
        <div class="card-header bg-dark text-white">Register Form</div>
        <div class="card-body">
          <div class="form-group">
            <p>Email</p>
            <input class="form-control" [(ngModel)]="formDangKy.email" />
          </div>
          <div class="form-group">
            <p>Fullname</p>
            <input class="form-control" #inputFName />
          </div>
        </div>
        <div class="card-footer text-left">
          <button
            class="btn btn-success"
            (click)="submitForm(inputFName.value)"
          >
            Submit
          </button>
        </div>

        <div class="alert alert-success">
          <p>
            <span style="font-weight: 300; font-size: 16px">Email: </span>
            {{ formDangKy.email }}
          </p>
          <p>
            <span style="font-weight: 300; font-size: 16px">Full Name: </span>
            {{ fullName }}
          </p>
        </div>
      </div>
    </div>
  `,
})
export class RegisterFormComponent implements OnInit {
  fullName: string = '';

  formDangKy: registerForm = {
    email: '',
  };

  constructor() {}

  submitForm(newFName: string) {
    this.fullName = newFName;
    return newFName;
  }

  ngOnInit() {}
}

interface registerForm {
  email: string;
}
