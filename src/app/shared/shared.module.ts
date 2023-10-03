import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LacyImageComponent } from './components/lacy-image/lacy-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LacyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LacyImageComponent
  ]
})
export class SharedModule { }
