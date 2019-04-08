import { PostInfo } from 'src/app/components/shared/models/post-info';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { PostService } from '../../../core/services/post.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  allPosts$: Observable<PostInfo[]>;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.route.url.subscribe((segmentArr: UrlSegment[]) => {
      if (segmentArr.length === 1) {
        this.allPosts$ = this.postService.getUserPosts();
      } else {
        this.allPosts$ = this.postService.getAll();
      }
    });
  }

  onDeletePost(id: string) {
    this.postService.deletePost(id).subscribe(() => {
      this.toastrService.success('Post deleted successfully');
      this.allPosts$ = this.postService.getAll();
    });
  }
}
