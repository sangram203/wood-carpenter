import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './includes/navbar/nav.component';
import { FooterComponent } from './includes/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PathMatched } from './common/services/pathmatch.service';
import { HttpService } from './common/services/http.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    providers:[PathMatched, HttpService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
