import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { CouseComponent } from './couse/couse.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CouseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
