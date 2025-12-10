import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-intersection-observer',
  templateUrl: './intersection-observer.component.html',
  styleUrls: ['./intersection-observer.component.scss']
})
export class IntersectionObserverComponent implements AfterViewInit, OnDestroy {
  @ViewChild('anchor') anchor!: ElementRef;
  observer!: IntersectionObserver;

  posts: any[] = [];
  loading = false;

  limit = 10;
  skip = 0;
  total = 0;
  hasMore = true;

  constructor(private postsService: PostsService) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.loadPosts(), 0);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.loading && this.hasMore) {
          this.loadPosts();
        }
      },
      {
        root: null,
        rootMargin: '400px',
        threshold: 0.1
      }
    );

    this.observer.observe(this.anchor.nativeElement);
  }

  loadPosts(): void {
    if (this.loading || !this.hasMore) return;
    this.loading = true;

    this.postsService.getPosts(this.limit, this.skip).subscribe({
      next: (response) => {
        this.posts.push(...response.posts);

        this.skip += this.limit;   // UPDATE SKIP
        this.total = response.total;

        // STOP when no more data
        if (this.skip >= this.total) {
          this.hasMore = false;
        }

        this.loading = false;

        // If screen still not scrollable → load next page
        setTimeout(() => this.checkIfNeedsMore(), 0);
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  private checkIfNeedsMore(): void {
    const docHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (docHeight <= viewportHeight && this.hasMore && !this.loading) {
      this.loadPosts();
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
