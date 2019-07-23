import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './includes/navbar/nav.component';
import { FooterComponent } from './includes/footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    NavComponent,
    FooterComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
