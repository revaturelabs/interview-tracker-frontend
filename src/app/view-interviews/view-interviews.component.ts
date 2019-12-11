import { Component, OnInit } from "@angular/core";
import { NavbarservService } from "../services/navbarserv.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { InterviewService } from "../services/Interview/interview.service";
import { Interview } from "../models/interview";
import { FormControl } from "@angular/forms";
import { Comment } from "src/app/models/comment";
import { CommentService } from "../services/Comment/comment.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-view-interviews",
  templateUrl: "./view-interviews.component.html",
  styleUrls: ["./view-interviews.component.scss"]
})
export class ViewInterviewsComponent implements OnInit {
  interviews: Interview[];
  commentList: Comment[];

  constructor(
    public nav: NavbarservService,
    private http: HttpClient,
    private interviewService: InterviewService,
    private commentService: CommentService,
    private router: Router
  ) {}

  comment: Comment;
  updatedInterview: Interview;
  foundId: number;

  ngOnInit() {
    this.nav.show();
    this.getAllInterviews();
    this.getAllComments();
  }

  getAllInterviews() {
    this.interviewService.getAllInterviews().subscribe(
      data => {
        this.interviews = data;
        console.log(data);  
      },
      err => {console.log(err)}
    );
  }
  getAllComments()
  {
    this.commentService.returnAllComments().subscribe(
      data => {
        
        // if(data === null)
        // {
        //   console.log(data)
          
        // }
        this.commentList = data;
      },
      error => {
        console.log(error)
      }
    ) 
  }
  nameFC = new FormControl();
  commentFC = new FormControl();
  intId: number;

  sendComment(intId) {
    let timeStamp = new Date();
    this.commentService.grabInterview(intId).subscribe(
      data => {
        console.log(data);
        this.commentService
          .addComment(
            data["id"],
            (this.comment = new Comment(
              0,
              timeStamp,
              this.nameFC.value,
              this.commentFC.value,
              (this.updatedInterview = data)
            ))
          )
          .subscribe(
            data => {
              console.log(data);
              // this.router.navigateByUrl("/hub");
              location.reload();
            },
            error => {
              console.log(error);
            }
          );
      },
      error => {
        console.log(error);
      }
    );
  }
}
