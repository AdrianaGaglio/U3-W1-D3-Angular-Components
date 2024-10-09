import { Component } from '@angular/core';
import { iPost } from '../../interfaces/ipost';

@Component({
  selector: '.app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: iPost[] = [];
  relatedPosts: iPost[] = [];
  featuredIndex: number = 0;
  index: number = 0;

  ngOnInit() {
    // esegue al caricamento del componente
    fetch('db.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.posts = data.posts;
        console.log(this.posts);
        for (let i = 0; i < 4; i++) {
          this.index =
            Math.floor(Math.random() * 30) !== this.featuredIndex
              ? Math.floor(Math.random() * 30)
              : Math.floor(Math.random() * 30);
          this.relatedPosts.push(this.posts[this.index]);
        }
      })
      .catch((err) => console.log(err));
  }
}
