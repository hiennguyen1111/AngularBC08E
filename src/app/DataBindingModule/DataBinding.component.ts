import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    template: `
    <div class="container">
        <h1 class="display-4">Databinding</h1>
        <h3>Oneway binding</h3>
        <p>1. Interpolation (Binding du lieu tu modols-> view thong qua thuoc tinh voi dau ngoac nhon) ===> Dung cho phan innerHTML cua the</p>
        <p>Thong tin lop hoc: {{title}}</p>
        <input value="{{title}}" />
        <p class="text-danger">2. Property binding (bindng dua tren thuoc tinh cua the thong qua ngoac vuong) ===> Thuong dung cho the input</p>
        <div [innerHTML]="'Thong tin lop hoc' + ' ' + title"></div>
        <input value="title" />
        <p>3. Event binding (Thay doi du lieu tren giao dien thong qua xu ly thao tac nguoi dung)</p>
        <div class="form-group">
            <p>Title</p>
            <input class="form-control w-25" #tagInput /> Template variable
            <br />
            <button class="btn btn-success" (click)="changeTitle(tagInput.value)">Change Title</button>
        </div>
        <p>4. Two ways binding (Binding du lieu 2 chieu tu dong, chi can dung FormsModule)</p>
        <input class="form-control" [(ngModel)]=title />
        
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>image</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let product of arrProduct">
                    <td>{{product.id}}</td>
                    <td>{{product.name}}</td>
                    <td><img [src]="product.img" width="50" height="50" alt="..." /></td>
                    <td>{{product.price}}</td>
                    <td><input class="form-control" [(ngModel)]="product.quantity"></td>
                    <td>{{product.price * product.quantity}}</td>
                </tr>
            </tbody>
        </table>
    </div>`
})

export class DataBindingComponent implements OnInit {
    // Du lieu muon hien thi duoc len giao dien thi phai la thuoc tinh cua component
    title: string = 'Bootcamp08E';
    arrProduct: Product[] = [
        {id:'1',name:'iPhone X',price:1000,img:'https://picsum.photos/200/200',quantity:15},
        {id:'2',name:'iPhone XS',price:2000,img:'https://picsum.photos/200/200',quantity:10},
        {id:'3',name:'iPhone XS MAX',price:3000,img:'https://picsum.photos/200/200',quantity:25},
    ]
    constructor() { }

    changeTitle(newTitle:string) {
        this.title = newTitle;
    }

    ngOnInit() { }
}

interface Product {
    id:string,
    name:string,
    price:number,
    img:string,
    quantity:number,
}