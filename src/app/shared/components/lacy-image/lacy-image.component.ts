import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lacy-image',
  templateUrl: './lacy-image.component.html',
})
export class LacyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false

  ngOnInit(): void {
    if( !this.url ) throw new Error('Url is required');
  }

  onLoad():void {
    setTimeout(() => {
      this.hasLoaded = true;
    },200)
  }
}
