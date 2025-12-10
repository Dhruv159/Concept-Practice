import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private api = 'https://dummyjson.com/posts';

  constructor(private http: HttpClient) { }

    getPosts(limit: number, skip: number) {
    return this.http.get<{ posts: any[], total: number, skip: number, limit: number }>(
      `${this.api}?limit=${limit}&skip=${skip}`
    );
  }
}
