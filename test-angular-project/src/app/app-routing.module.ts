import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserComponent } from './components/user/user.component';
import { CreditsPageComponent } from './components/credits-page/credits-page.component';
import { PackagesPageComponent } from './components/packages-page/packages-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component:MainPageComponent
  },
  {
    path:'home',
    component:MainPageComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'userSearch',
    component:UserSearchComponent
  },
  {
    path:'posts',
    component:PostListComponent
  },
  {
    path:'post/:id',
    component:PostComponent
  },
  {
    path:'logIn',
    component:LoginComponent
  },
  {
    path:'signUp',
    component:SignUpComponent
  },
  {
    path:'credits',
    component:CreditsPageComponent
  },
  {
    path:'packages',
    component:PackagesPageComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
