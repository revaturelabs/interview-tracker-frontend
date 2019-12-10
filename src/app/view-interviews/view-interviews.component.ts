import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../services/navbarserv.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InterviewService } from '../services/Interview/interview.service';
import { Interview } from '../models/interview';
import { FormControl } from '@angular/forms';
import { Comment } from 'src/app/models/comment';
import { CommentService } from '../services/Comment/comment.service';

@Component({
  selector: 'app-view-interviews',
  templateUrl: './view-interviews.component.html',
  styleUrls: ['./view-interviews.component.scss']
})
export class ViewInterviewsComponent implements OnInit {
interviews: Interview[];
  constructor(public nav: NavbarservService, 
    private http: HttpClient, 
    private interviewService: InterviewService,
    private commentService: CommentService) { }

  comment: Comment;
  updatedInterview: Interview;
  foundInterviewId: number;

  ngOnInit() {
    this.nav.show();
    this.getAllInterviews();
  }
  getAllInterviews() {
    this.interviewService.getAllInterviews().subscribe(i => {
      this.interviews = i;

    }, err => console.log(err))
  }
  nameFC = new FormControl();
  commentFC = new FormControl();
  intId: number;

  sendComment(intId){
      let timeStamp = new Date();
      this.commentService.grabInterview(intId).subscribe(
        data => {
          console.log(data);
            this.commentService.addComment(
                    data["id"], 
                    this.comment = new Comment(
                      timeStamp,
                      this.nameFC.value,
                      this.commentFC.value,
                      this.updatedInterview = data
                    )
                  ).subscribe(
                        data => {
                          console.log(data)
                        },
                        error => {
                          console.log(error)
                        }
                  )
        },
        error => {
          console.log(error)
        }
      )
    }
  }

