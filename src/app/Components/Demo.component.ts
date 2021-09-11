import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo', // ten the
    template: `
    <div>
        Demo component angular
    </div>`
})

export class DemoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}