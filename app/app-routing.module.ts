import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TraditionalApproachScrollEventComponent } from './Scroll-Feed/traditional-approach-scroll-event/traditional-approach-scroll-event.component';
import { IntersectionObserverComponent } from './Scroll-Feed/intersection-observer/intersection-observer.component';
import { AngularCDKVirtualScrollComponent } from './Scroll-Feed/angular-cdk-virtual-scroll/angular-cdk-virtual-scroll.component';
import { InfiniteScrollComponent } from './Scroll-Feed/infinite-scroll/infinite-scroll.component';
import { ParentComponent } from './debounce-to-parent/parent/parent.component';

const routes: Routes = [
  {path: '', redirectTo: 'infinite-scroll', pathMatch: 'full'},
  {path : 'infinite-scroll', component: InfiniteScrollComponent, 
    children : [
      { path: '', redirectTo: 'traditional', pathMatch:'full' },
      {path : 'traditional', component: TraditionalApproachScrollEventComponent},
      {path : 'intersection-observer', component: IntersectionObserverComponent},
      {path : 'angular-cdk', component: AngularCDKVirtualScrollComponent},
    ]
  },
  { path: 'debounce-to-parent', component: ParentComponent },
  { path: '**', redirectTo: 'traditional' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
