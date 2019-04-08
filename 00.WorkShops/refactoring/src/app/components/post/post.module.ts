import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostRoutingModule } from './post-routing.module';

import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostInfoComponent } from './post-info/post-info.component';

import { CommentCreateComponent } from '../comment/comment-create/comment-create.component';
import { CommentInfoComponent } from '../comment/comment-info/comment-info.component';

@NgModule({
  declarations: [
    PostCreateComponent,
    PostDetailsComponent,
    PostEditComponent,
    PostListComponent,
    PostInfoComponent,
    CommentCreateComponent,
    CommentInfoComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    // CoreModule -> importing this will throw an error since the app can generate multiple instance of the service
  ]
})
export class PostModule { }
