import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CommentInfo } from './../../shared/models/comment-info';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})
export class CommentInfoComponent implements OnInit {
  @Input() commentInfo: CommentInfo;
  @Output() deleteCommentEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  isAuthor() {
    return this.commentInfo['_acl']['creator'] === localStorage.getItem('userId');
  }

  deleteComment(id: string) {
    this.deleteCommentEmitter.emit(id);
  }

}
