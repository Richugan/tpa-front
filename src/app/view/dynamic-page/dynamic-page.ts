import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { WPService } from '../../data/wp.service';
import { WPPostRequestParams } from '../../data/wp-post-request-params';
import { PageCard } from '../page-card/page-card';
import { RouterModule } from '@angular/router';
import { RenderedWPPost } from '../../data/rendered-wp-post';

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [CommonModule, PageCard, RouterModule],
  templateUrl: './dynamic-page.html',
  styleUrl: './dynamic-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicPage {
  postsPerPage = 6;
  page = signal(1);
  perPage = signal(this.postsPerPage);
  search = signal('');
  loading = signal(false);
  error = signal<string | null>(null);

  posts = signal<RenderedWPPost[]>([]);
  total = signal(0);
  totalPages = signal(0);

  constructor(protected wpService: WPService) {
    effect(() => {
      this.fetch();
    });
  }

  setPage(p: number) {
    if (p < 1) p = 1;
    if (this.totalPages() && p > this.totalPages()) p = this.totalPages();
    this.page.set(p);
  }

  submitSearch(q: string) {
    this.search.set(q);
    this.page.set(1);
  }

  private fetch() {
    this.loading.set(true);
    this.error.set(null);

    const requestParams: WPPostRequestParams = {
      page: this.page(),
      perPage: this.perPage(),
      search: this.search(),
    };

    this.wpService.getPosts(requestParams).subscribe({
      next: (res) => {
        this.posts.set(res.posts);
        this.total.set(res.total);
        this.totalPages.set(res.totalPages);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(typeof err?.message === 'string' ? err.message : 'Failed to load');
        this.loading.set(false);
      },
    });
  }

  rangeHelper(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
