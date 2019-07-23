import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './includes/navbar/nav.component';
import { FooterComponent } from './includes/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home', component:HomeComponent},
      {path:'login', component:LoginComponent}
    ]) 
    ],
  declarations: [ 
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
