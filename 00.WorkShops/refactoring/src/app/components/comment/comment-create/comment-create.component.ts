import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  @Output() postCommentEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  postComment(f: NgForm): void {
    this.postCommentEmitter.emit(f);
  }

}
