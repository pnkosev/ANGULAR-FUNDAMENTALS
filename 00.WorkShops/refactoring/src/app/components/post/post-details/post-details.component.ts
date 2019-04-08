import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PostService } from '../../../core/services/post.service';
import { CommentService } from '../../../core/services/comment.service';
import { CommentInfo } from './../../shared/models/comment-info';
import { PostInfo } from 'src/app/components/shared/models/post-info';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @ViewChild('f') createCommentForm: NgForm;
  post: PostInfo;
  comments$: Observable<CommentInfo[]>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService: CommentService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.post = this.route.snapshot.data['singlePost'];
    this.loadComments();
  }

  loadComments() {
    this.comments$ = this.commentService.getAllForPost(this.id);
  }

  deleteComment(id: string) {
    this.commentService.deleteComment(id)
      .subscribe(() => {
        this.toastrService.success('Comment deleted successfully');
        this.loadComments();
      });
  }

  postComment(body) {
    body['postId'] = this.post['_id'];
    body['author'] = localStorage.getItem('username');

    this.commentService
      .postComment(body)
      .subscribe(() => {
        this.toastrService.success('Comment created successfully');
        this.loadComments();
      });
  }

  isAuthor() {
    return this.post['_acl']['creator'] === localStorage.getItem('userId');
  }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.toastrService.success('Post deleted successfully');
        this.router.navigate(['/posts']);
      });
  }
}
