import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {ThemeModule} from './@theme/theme.module';

import {INTERCEPTORS} from './@core/interceptors';


import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {IndexComponent} from './pages/index/index.component';
import {NewsDetailsComponent} from './pages/news-details/news-details.component';
import {AboutComponent} from './pages/about/about.component';
import { AboutInstituteComponent } from './pages/about/about-institute/about-institute.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NewsDetailsComponent,
    AboutComponent,
    AboutInstituteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [INTERCEPTORS, {provide: 'PREFIX_URL', useValue: environment.prefix_url}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
