import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  public showVideo: boolean = false;
  // public videoURL: string = 'https://www.runoob.com/try/demo_source/movie.mp4';
  public videosInfo: any;
  public inputvalue: string;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  searchVideo(value: string): void {
    console.log("123", value)
    this.http.get('assets/demo/data/search-video.json').subscribe(videosInfo => {
      this.videosInfo = videosInfo;
      this.videosInfo = this.videosInfo.filter(videoInfo =>(typeof videoInfo?.url === 'string' && videoInfo.url))
      this.showVideo = true;
    })
  }
}
