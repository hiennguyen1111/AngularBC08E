import { Component, OnInit } from '@angular/core';

// a-component-inline
@Component({
  selector: 'app-bai-tap-layout', // Ten the component
  template: ` <div>
    Bai tap layout component
    <app-bt-header></app-bt-header>
    <div class="d-flex">
      <div style="width:30%">
        <app-bt-sidebar></app-bt-sidebar>
      </div>
      <div style="width:40%">
        <app-bt-content></app-bt-content>
      </div>
      <div style="width:30%">
          <app-bt-footer></app-bt-footer>
      </div>
    </div>
  </div>`,
})
export class BaiTapLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
