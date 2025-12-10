import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TraditionalApproachScrollEventComponent } from './Scroll-Feed/traditional-approach-scroll-event/traditional-approach-scroll-event.component';
import { IntersectionObserverComponent } from './Scroll-Feed/intersection-observer/intersection-observer.component';
import { AngularCDKVirtualScrollComponent } from './Scroll-Feed/angular-cdk-virtual-scroll/angular-cdk-virtual-scroll.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './debounce-to-parent/parent/parent.component';
import { ChildComponent } from './debounce-to-parent/child/child.component';
import { InfiniteScrollComponent } from './Scroll-Feed/infinite-scroll/infinite-scroll.component';
import { ExamplePipe } from './shared/pipes/example-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TraditionalApproachScrollEventComponent,
    IntersectionObserverComponent,
    AngularCDKVirtualScrollComponent,
    ParentComponent,
    ChildComponent,
    InfiniteScrollComponent,
    ExamplePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
