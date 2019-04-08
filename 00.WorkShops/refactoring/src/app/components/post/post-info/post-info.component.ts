import { PostInfo } from 'src/app/components/shared/models/post-info';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  @Input() post: PostInfo;
  @Input() index: number;
  @Input() desc: string;
  @Output() deletePostEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.index = this.index + 1;
  }

  isAuthor(post: PostInfo) {
    // tslint:disable-next-line: no-string-literal
    return post['_acl']['creator'] === localStorage.getItem('userId');
  }

  deletePost(id: string): void {
    this.deletePostEmitter.emit(id);
  }

}
