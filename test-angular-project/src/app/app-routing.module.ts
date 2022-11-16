import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { UserComponent } from './components/user/user.component';
import { CreditsPageComponent } from './credits-page/credits-page.component';
import { PackagesPageComponent } from './packages-page/packages-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostCardComponent } from './post-card/post-card.component';

const routes: Routes = [
  {
    path:'home',
    component:MainPageComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'posts',
    component:PostListComponent
  },
  {
    path:'post',
    component:PostCardComponent
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
