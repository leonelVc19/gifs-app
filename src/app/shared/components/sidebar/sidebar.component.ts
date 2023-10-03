import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/servers/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifsService: GifsService ){}

  cardListGifs() {
    console.log(this.gifsService.tagsHistory);
  }

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchGif( tag: string ): void {
    this.gifsService.searchTag(tag);
  }

}
