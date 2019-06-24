import { Component } from "@angular/core";
import * as moment from 'moment';
import { VideoService } from '../../services/video.service';
import { AppState } from '../../services/app-state.service';
import { Video } from '../../models/video.model';

@Component({
  selector: 'iy-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent {

  constructor(private videoService: VideoService, private appState: AppState) { }

  search(query: string) {
    this.videoService.fetchVideos(query)
      .subscribe(data => {
        this.appState.videoList = data.items.map(item => {
          return new Video(
            item.id.videoId,
            item.snippet.title,
            item.snippet.thumbnails.high.url,
            item.snippet.channelTitle,
            item.snippet.channelId,
            moment(item.snippet.publishedAt).fromNow(),
            item.snippet.description)
        });
      });
  }

}
