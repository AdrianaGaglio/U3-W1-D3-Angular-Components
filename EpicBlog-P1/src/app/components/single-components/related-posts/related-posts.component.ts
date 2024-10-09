import { Component, OnInit } from '@angular/core';
import { iPost } from '../../../interfaces/ipost';
import { iJSONresponse } from '../../../interfaces/jsonresponse';

@Component({
  selector: '.app-related-posts',
  templateUrl: './related-posts.component.html',
  styleUrl: './related-posts.component.scss',
})
export class RelatedPostsComponent implements OnInit {
  posts: iPost[] = [];
  relatedPosts: iPost[] = [];
  featuredIndex: number = 0;
  index: number = 0;

  ngOnInit() {
    // esegue al caricamento del componente
    fetch('db.json')
      .then((res) => <Promise<iJSONresponse>>res.json())
      .then((data) => {
        this.posts = data.posts;
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
