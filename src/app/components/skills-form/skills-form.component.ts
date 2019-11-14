import { Component, ViewChild, OnInit, NgZone } from '@angular/core';
import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import { take } from "rxjs/operators";




@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnInit {

  constructor( 
    private _ngZone: NgZone,
    
  ) {

  }

  ngOnInit() {
  }
  @ViewChild("autosize", { static: false }) autosize: CdkTextareaAutosize; 

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }


}

