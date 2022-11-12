import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HijoComponent } from './hijo/hijo.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HijoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent,HijoComponent]
})
export class ComponentsModule { }
