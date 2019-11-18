import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {
  form: FormGroup;
  skillData = [
    { skill_id: 1, skill_title: 'Appian' },
    { skill_id: 2, skill_title: 'Azure' },
    { skill_id: 3, skill_title: 'Big Data-Hadoop' },
    { skill_id: 4, skill_title: 'Business Analyst' },
    { skill_id: 5, skill_title: 'Business System Analyst'},
    { skill_id: 6, skill_title: 'Cloud Admin'},
    { skill_id: 7, skill_title: 'Cloud Native'},
    { skill_id: 8, skill_title: 'Cybersecurity'},
    { skill_id: 9, skill_title: 'GCP'},
    { skill_id: 10, skill_title: 'Java with React.js'},
    { skill_id: 11, skill_title: 'JTA'},
    { skill_id: 12, skill_title: 'Java/Microservices'},
    { skill_id: 13, skill_title: 'Java/PCF'},
    { skill_id: 14, skill_title: 'Microsoft.NET'},
    { skill_id: 15, skill_title: 'Mulesoft'},
    { skill_id: 16, skill_title: 'Pega'},
    { skill_id: 17, skill_title: 'Performance Engineering'},
    { skill_id: 18, skill_title: 'Salesforce'},
    { skill_id: 19, skill_title: 'Selenium'},
    { skill_id: 20, skill_title: 'ServiceNow'},
    { skill_id: 21, skill_title: 'System Admin'}
  ];




  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      skills: new FormArray ([])
    });

  //   this.addCheckboxes();
  //  }

  //  private addCheckboxes() {
  //    this.skillData.forEach(o, i) => {
  //      const control = new FormControl(i===0);
  //      (this.form.controls.skills as FormArray).push(control);
  //    });
   }

  ngOnInit() {
  }

  submission(form: NgForm) {
    this.http.post('http://localhost:8765/interview-service/jobs/saveJob', {
      title: form.value.title,
      description: form.value.description,
    })
    .toPromise()
    .then((r: {title: string; description: string}) => {
      console.log(r);
    })
    .catch(e => console.log(e));
  }
  onLogInButtonClick(): void {
this.router.navigate(['hub']);
  }

}
