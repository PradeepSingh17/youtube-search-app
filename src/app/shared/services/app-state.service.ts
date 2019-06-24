import { Injectable } from "@angular/core";
import { Video } from "../models/video.model";


@Injectable()
export class AppState {

  videoList: Video[] = [];
  activeVideo: Video;

  constructor() {
  }

}
