import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { SearchComponent } from './shared/components/search/search.component';



import { AppState } from './shared/services/app-state.service';
import { VideoService } from './shared/services/video.service';
import { VideosComponent } from './components/videos/videos.component';
import { VideoListComponent } from './components/videos/video-list/video-list.component';
import { VideoDetailComponent } from './components/videos/video-detail/video-detail.component';

import { Ng2PaginationModule } from "ng2-pagination";
import { YoutubeSafeUrlPipe } from './shared/pipes/youtube-safe-url.pipe';
import { VideoListItemComponent } from './components/videos/video-list-item/video-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    VideosComponent,
    VideoListComponent,
    VideoDetailComponent,
    VideoListItemComponent,
    YoutubeSafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    Ng2PaginationModule
  ],
  providers: [
    AppState,
    VideoService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
