import { Component } from '@angular/core';

@Component({
  selector: '.app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrl: './featured-post.component.scss',
})
export class FeaturedPostComponent {
  featuredPost: any = {};
  featuredIndex: number = 0;

  ngOnInit() {
    this.featuredIndex = Math.floor(Math.random() * 30);

    // esegue al caricamento del componente
    fetch('db.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.featuredPost = data.posts[this.featuredIndex];
      })
      .catch((err) => console.log(err));
  }
}
