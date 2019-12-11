import { Component, OnInit } from "@angular/core";
import { NavbarservService } from "../services/navbarserv.service";
import { InterviewService } from "../services/Interview/interview.service";
import { Interview } from "../models/interview";
import { FormControl } from "@angular/forms";
import { Comment } from "src/app/models/comment";
import { CommentService } from "../services/Comment/comment.service";

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
    private interviewService: InterviewService,
    private commentService: CommentService
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
      },
      err => {
        console.log(err);
      }
    );
  }
  getAllComments() {
    this.commentService.returnAllComments().subscribe(
      data => {
        this.commentList = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  nameFC = new FormControl();
  commentFC = new FormControl();
  intId: number;

  sendComment(intId) {
    let timeStamp = new Date();
    this.commentService.grabInterview(intId).subscribe(
      data => {
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
