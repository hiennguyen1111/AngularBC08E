import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-sidebar',
    template: `
    <div class="bt-sidebar">
        Sidebar
    </div>`,
    styles:[
        `.bt-sidebar {
            background: pink;
            color: white;
            height: 50px;
        }`
    ]
})

export class BTSideBarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}