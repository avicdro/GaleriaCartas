import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavGComponent } from './nav-g/nav-g.component';
import { CardsComponent } from './cards/cards.component';
import { FilterPipe } from './cards/share/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavGComponent,
    CardsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
