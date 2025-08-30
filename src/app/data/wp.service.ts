import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { WPPost } from './wp-post';
@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class WPService {
  constructor(private httpService: HttpService) {}

  getPosts(): Observable<WPPost[]> {
    return this.httpService.doHttpGet<WPPost[]>('/wp-json/wp/v2/posts');
  }
}
