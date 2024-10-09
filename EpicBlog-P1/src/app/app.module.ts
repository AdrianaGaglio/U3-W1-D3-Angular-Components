import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FeaturedPostComponent } from './components/featured-post/featured-post.component';
import { RelatedPostsComponent } from './components/related-posts/related-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostDetailComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    FeaturedPostComponent,
    RelatedPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
