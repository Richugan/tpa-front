import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WPService } from '../../../data/wp.service';
import { RenderedWPPost } from '../../../data/rendered-wp-post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detailed',
  imports: [CommonModule],
  templateUrl: './blog-detailed.html',
  styleUrl: './blog-detailed.scss',
})
export class BlogDetailed implements OnInit {
  postId = '';
  error = '';

  post!: RenderedWPPost;
  loading = signal(true);

  constructor(private route: ActivatedRoute, protected wpService: WPService) {
    this.postId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.wpService.getPost(this.postId).subscribe({
      next: (post) => {
        this.post = post;
        this.loading.set(false);
        console.log(!this.loading && !this.error);
      },
      error: (err) => {
        this.error = 'Failed to load post.';
        this.loading.set(false);
      },
    });
  }
}
