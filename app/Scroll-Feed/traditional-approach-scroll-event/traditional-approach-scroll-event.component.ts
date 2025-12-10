import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-traditional-approach-scroll-event',
  templateUrl: './traditional-approach-scroll-event.component.html',
  styleUrls: ['./traditional-approach-scroll-event.component.scss']
})
export class TraditionalApproachScrollEventComponent {
  loading: boolean = false;
  posts: any[] = [];
  page: number = 1;
  limit: number = 10;
  
  loadPosts(): void {
    if(this.loading) return;
    this.loading = true;


    setTimeout(() => {
      const newPosts = Array.from({length: 10}).map((_, index) => ({
          id: (this.page - 1) * this.limit + index + 1,
          text: `Post #${(this.page - 1) * this.limit + index + 1}`
        }));

        this.posts = [...this.posts, ...newPosts];
        this.loading = false;
        this.page++;

        // if no scroll bar → load more
        this.ensureScrollable();
    }, 1000);
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop    = window.scrollY;
    const windowHeight = window.innerHeight;

    const isBottom = scrollTop + windowHeight >= scrollHeight - 10;

    if (isBottom) {
      this.loadPosts();
    }
  }

  ensureScrollable() {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight <= clientHeight) {
      this.loadPosts();
    }
  }
}

