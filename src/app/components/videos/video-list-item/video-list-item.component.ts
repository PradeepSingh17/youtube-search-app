import {Component, Input} from "@angular/core";
import { Video } from '../../../shared/models/video.model';
import { AppState } from '../../../shared/services/app-state.service';

@Component({
  selector: 'iy-video-list-item',
  templateUrl: 'video-list-item.component.html',
  styleUrls: ['video-list-item.component.css']
})
export class VideoListItemComponent {
  @Input() video: Video;

  constructor(private appState: AppState) {}

  onClick(){
    this.appState.activeVideo = this.video;
  }

}
