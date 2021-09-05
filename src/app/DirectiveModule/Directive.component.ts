import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: ` <div class="container" style="margin-bottom: 400px">
    <h3 class="display-4">Structural (directive angular cung cap)</h3>
    <h3>*ngIf</h3>
    <nav class="nav bg-dark text-white">
      <a
        *ngIf="!isLogin; else tempLogin"
        href="#"
        class="nav-link active bg-dark text-white"
        (click)="login()"
        >Login</a
      >
      <!-- <a *ngIf="isLogin" href="#" class="nav-link active bg-dark text-white">Hello! {{userName}}</a> -->
    </nav>
    <ng-container [ngTemplateOutlet]="tempLogin"></ng-container>
    <ng-template #tempLogin>
      <a *ngIf="isLogin" href="#" class="nav-link active bg-dark text-white"
        >Hello! {{ userName }}</a
      >
    </ng-template>

    <hr />

    <div class="form-group">
      <p>Input number</p>
      <input class="form-control w-25" [(ngModel)]="number" />
    </div>

    <div class="alert alert-success">
      <p *ngIf="number % 2 === 0">So chan</p>
      <p *ngIf="number % 2 !== 0">So le</p>
    </div>
    <h3>*ngSwitchCase</h3>
    <select [(ngModel)]="color" class="form-control w-25">
      <option value="color:pink">Pink</option>
      <option value="color:yellow">Yellow</option>
      <option value="color:blue">Blue</option>
      <option value="color:orange">Orange</option>
    </select>

    <div [ngSwitch]="color">
      <option value="color:pink" *ngSwitchCase="'pink'">Pink</option>
      <option value="color:yellow" *ngSwitchCase="'yellow'">Yellow</option>
      <option value="color:blue" *ngSwitchCase="'blue'">Blue</option>
      <option value="color:orange" *ngSwitchCase="'orange'">Orange</option>
    </div>

    <hr />

    <h3>*ngFor</h3>
    <div class="row">
      <div class="col-4" *ngFor="let user of arrUser; let index = index">
        <div class="card">
          <img [src]="user.avatar" alt="..." />
          <div class="card-body">
            <p>ID: {{ index + 1 }}</p>
            <p>userName: {{ user.userName }}</p>
            <p>password: {{ user.password }}</p>
            <p>email: {{ user.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`,
})
export class DirectiveComponent implements OnInit {
  arrUser: User[] = [
    {
      userName: 'hienvuive',
      password: '12/12/1996',
      email: 'hienvuive@gmail.com',
      avatar: 'https://i.pravatr.cc?u=hien',
    },
    {
      userName: 'hoadepgai',
      password: '01/02/1996',
      email: 'hoaxinh11@gmail.com',
      avatar: 'https://i.pravatr.cc?u=hoa',
    },
    {
      userName: 'happycamp',
      password: '09/09/1998',
      email: 'huecatinh15@gmail.com',
      avatar: 'https://i.pravatr.cc?u=hue',
    },
  ];
  color: string = 'pink';
  number: number = 5;
  userName: string = 'hienvuive';
  isLogin: boolean = false;

  login() {
    this.isLogin = true;
  }
  constructor() {}

  ngOnInit() {}
}

interface User {
    userName: string
    password: string
    email: string
    avatar: string
}
