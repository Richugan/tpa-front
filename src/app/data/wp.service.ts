import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WPPostRequestParams } from './wp-post-request-params';
import { WPPost } from './wp-post';
import { RenderedWPPost } from './rendered-wp-post';
import { API_URL } from '../environments/dev.environmets';
import { DomSanitizer } from '@angular/platform-browser';

export interface WPPostResponse {
  posts: RenderedWPPost[];
  total: number;
  totalPages: number;
}

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class WPService {
  constructor(private httpService: HttpService, private sanitizer: DomSanitizer) {}
  private http = inject(HttpClient);
  private base = API_URL;
  private multiplier = 1;

  getPosts(opts: WPPostRequestParams): Observable<WPPostResponse> {
    let params = new HttpParams()
      .set('page', String(opts.page ?? 1))
      .set('per_page', String(opts.perPage ?? 6))
      .set('_embed', '1');
    if (opts.search) params = params.set('search', opts.search);

    return this.http
      .get<WPPost[]>(`${this.base}/wp-json/wp/v2/posts`, { observe: 'response', params })
      .pipe(
        map((res) => {
          const posts: RenderedWPPost[] = (res.body ?? []).map((p) => {
            return this.parseData(p);
          });

          //imitate that there is more posts for pagination
          const multipliedPosts: RenderedWPPost[] = [];
          for (let i = 0; i < this.multiplier; i++) {
            multipliedPosts.push(...posts);
          }

          return {
            posts: multipliedPosts,
            total: Number(res.headers.get('X-WP-Total') ?? 0) * this.multiplier,
            totalPages: Number(res.headers.get('X-WP-TotalPages') ?? 0) * this.multiplier,
          };
        })
      );
  }

  parseData(post: WPPost): RenderedWPPost {
    const media = post._embedded?.['wp:featuredmedia']?.[0];
    return {
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      content: this.sanitizer.bypassSecurityTrustHtml(post.content?.rendered || ''),
      link: post.link,
      date: post.date,
      image: media?.source_url ?? null,
      alt: media?.alt_text ?? '',
      author: {
        name: post._embedded?.author?.[0]?.name || '',
        avatarURL:
          post._embedded?.author?.[0]?.avatar_urls?.['96'] ||
          post._embedded?.author?.[0]?.avatar_urls?.['48'] ||
          '',
      },
      hero: {
        sourceURL: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
        altTitle: post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered,
      },
    };
  }

  getPost(postId: string): Observable<RenderedWPPost> {
    return this.http
      .get<WPPost>(`${this.base}/wp-json/wp/v2/posts/${postId}`)
      .pipe(map((res) => this.parseData(res)));
  }
}
