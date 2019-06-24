import { Component } from "@angular/core";
import { AppState } from '../../../shared/services/app-state.service';

@Component({
  selector: 'iy-video-detail',
  templateUrl: 'video-detail.component.html',
  styleUrls: ['video-detail.component.css']
})
export class VideoDetailComponent {

  constructor(private appState: AppState) {}

}
