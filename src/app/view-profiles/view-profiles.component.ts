import { Component, OnInit } from "@angular/core";
import { NavbarservService } from "../services/navbarserv.service";
import { HttpClient } from "@angular/common/http";
import { ProfileService } from "../services/Profile/profile.service";
import { InterviewService } from "../services/Interview/interview.service";
import { Profile } from "../models/profile";
import { Interview } from "../models/interview";
import { Skill } from "../models/skill";

@Component({
  selector: "app-view-profiles",
  templateUrl: "./view-profiles.component.html",
  styleUrls: ["./view-profiles.component.scss"]
})
export class ViewProfilesComponent implements OnInit {
  profiles: Profile[];
  interviews: Interview[];
  opinions: any;
  name: string;

  constructor(
    public nav: NavbarservService,
    private http: HttpClient,
    private profileService: ProfileService,
    private interviewService: InterviewService
  ) {}

  ngOnInit() {
    this.opinions = "byname";
    this.nav.show();
    this.getAllProfiles();
    this.getAllInterviews();
  }

  filterS(profile: Profile, searchName: string): boolean {
    if (typeof searchName === "undefined") {
      searchName = "";
    }
    let allskills = "";
    const fname: string = profile.firstName;
    const lname: string = profile.lastName;
    const skills: Skill[] = profile.skills;
    for (const x of skills) {
      allskills += x.title;
    }
    let outpt = false;
    if (this.opinions === "byname") {
      outpt = (fname + lname).toLowerCase().includes(searchName.toLowerCase());
    } else {
      outpt = allskills.toLowerCase().includes(searchName.toLowerCase());
    }
    return outpt;
  }

  getAllProfiles(): void {
    this.profileService.getAllProfiles().subscribe(
      p => {
        this.profiles = p;
      },
      err => console.log(err)
    );
  }
  getAllInterviews(): void {
    this.interviewService.getAllInterviews().subscribe(
      i => {
        this.interviews = i;
      },
      err => console.log(err)
    );
  }
}
