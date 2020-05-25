import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IndexComponent} from './pages/index/index.component';
import {NewsDetailsComponent} from './pages/news-details/news-details.component';
import {AboutComponent} from './pages/about/about.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'index', pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'news-details',
    component: NewsDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
