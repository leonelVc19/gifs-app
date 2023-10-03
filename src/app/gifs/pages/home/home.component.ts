import { Component } from '@angular/core';
import { GifsService } from '../../servers/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-home',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsServer: GifsService){}

  public openAlert = true;

  get gifs(): Gif[] {
    console.log('dd',this.gifsServer.gifList.length)
    if(this.gifsServer.gifList.length === 0) {
      return [];
    }
    return this.gifsServer.gifList;

  }
}
