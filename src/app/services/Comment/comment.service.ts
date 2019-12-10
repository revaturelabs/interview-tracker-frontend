import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from 'src/app/models/comment';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Interview } from 'src/app/models/interview';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  public addComment(id: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(environment.main_url + `comment/insert?id=${id}`, comment);
  }

  public grabInterview(interviewId: number): Observable<Interview> {
    return this.http.get<Interview>(environment.main_url + `/interviews/id/${interviewId}`);
  }

}
