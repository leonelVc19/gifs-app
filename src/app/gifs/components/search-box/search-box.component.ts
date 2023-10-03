import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../servers/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Search gifs:</h5>
    <div class="input-group " >
      <div class="input-group-prepend">
        <span id="basic-addon1">
          <img
            src="https://media.tenor.com/FZdgtizdzl0AAAAC/neko-komi-san.gif"
            width="80"
            alt="Komi Gifs"
            class="img-fluid img-thumbnail rounded"
          >
        </span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="Searching gifs..."
        (keyup.enter)="searchTag()"
        #txtTagInput
      >
    </div>
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  //LLamar al servicio
  constructor( private gifsService: GifsService ) {}

  searchTag():void {
    //Obtener el valor del input
    const newTag: string = this.tagInput.nativeElement.value;
    //Enviando el valor al service
    this.gifsService.searchTag( newTag )

    //Limpiando input
    this.tagInput.nativeElement.value = ''

  }
}
