import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-hub',
  templateUrl: './project-hub.component.html',
  styleUrls: ['./project-hub.component.scss']
})
export class ProjectHubComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;
  }

}
