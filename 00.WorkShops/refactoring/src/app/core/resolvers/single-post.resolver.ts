import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PostInfo } from './../../components/shared/models/post-info';
import { Injectable } from '@angular/core';
import { PostService } from '../services/post.service';

@Injectable({
    providedIn: 'root'
})
export class SinglePostResolver implements Resolve<PostInfo> {
    constructor(
        private postService: PostService,
    ) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.paramMap.get('id');
        return this.postService.getById(id);
    }
}