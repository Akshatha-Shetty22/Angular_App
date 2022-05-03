import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { NewPostComponent } from './components/new-post/new-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ApiService } from './services/api.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './services/auth.service';
import { MyPostsComponent } from './components/my-posts/my-posts.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewPostComponent,
    ContactFormComponent,
    LoginComponent,
    SignupComponent,
    MyPostsComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'new-post/add',component:NewPostComponent},
      {path:'new-post/:id',component:NewPostComponent},
      {path:'contact-us',component:ContactFormComponent},
      {path:'signup',component:SignupComponent},
      {path:'login',component:LoginComponent},
      {path:'home',component:HomeComponent},
      {path:'my-posts',component:MyPostsComponent},
      {path:'**',component:LoginComponent}
      

    ]),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
