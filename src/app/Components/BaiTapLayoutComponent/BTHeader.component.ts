import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-header',
    template: `
    <div class="bt-header" style="height: 50px;">
        Header
    </div>`,
    styles:[
        `.bt-header {
            background: black;
            color: white;
        }`
    ]
})

export class BTHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}