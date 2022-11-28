import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostCardComponent } from './components/post-list/post-card/post-card.component';
import { CreditsPageComponent } from './components/credits-page/credits-page.component';
import { PackagesPageComponent } from './components/packages-page/packages-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    PostListComponent,
    UserListComponent,
    UserComponent,
    PostComponent,
    PageNotFoundComponent,
    PostCardComponent,
    CreditsPageComponent,
    PackagesPageComponent
  ],
  exports:[
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
