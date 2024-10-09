import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePostsComponent } from './components/pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/pages/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './components/pages/post-detail/post-detail.component';
import { NavbarComponent } from './components/main-components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/main-components/header/header.component';
import { MenuComponent } from './components/main-components/menu/menu.component';
import { FeaturedPostComponent } from './components/single-components/featured-post/featured-post.component';
import { RelatedPostsComponent } from './components/single-components/related-posts/related-posts.component';

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
    RelatedPostsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
