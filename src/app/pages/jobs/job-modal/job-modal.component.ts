import { Component, OnInit, Input, HostListener } from '@angular/core';
import Job from 'src/app/models/Job';
import { SkillService } from 'src/app/skill.service';
import Skill from 'src/app/models/Skill';
import { FormControl } from '@angular/forms';
import { ProfileService } from 'src/app/profile.service';
import Profile from 'src/app/models/Profile';

@Component({
  selector: 'app-job-modal',
  templateUrl: './job-modal.component.html',
  styleUrls: ['./job-modal.component.scss']
})
export class JobModalComponent implements OnInit {

  private modal = document.getElementById("jobModal");
  private allProfiles: Profile[];
  private allSkills: Skill[];
  private skillSelect = new FormControl();
  private candSelect = new FormControl();
  @Input() job: Job;
  
  constructor(private skillServ: SkillService, private profServ: ProfileService) { }

  ngOnInit() {
    this.skillServ.retrieveAllSkills().subscribe(data => {
      this.allSkills = data;
    });
    this.profServ.retrieveAllProfiles().subscribe(data => {
      //this.allProfiles = data;
    });
  }

  closeModal()
  {
    this.modal.style.display = "none";
  }

  @HostListener('document:event', ['$event'])
  closeModalFromWindow(event: MouseEvent)
  {
    if (event.target == this.modal)
    {
      this.closeModal();
    }
  }

  submitInterviews()
  {
    //Create interviews page
    console.log("submittedInteviews: " + this.candSelect);    //FOR TESTING PLS REMOVE
  }
}
