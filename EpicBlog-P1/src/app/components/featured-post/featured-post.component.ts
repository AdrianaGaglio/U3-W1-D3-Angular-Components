import { Component, OnInit } from '@angular/core';
import { iJSONresponse } from '../../interfaces/ijsonresponse';

@Component({
  selector: '.app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrl: './featured-post.component.scss',
})
export class FeaturedPostComponent implements OnInit {
  featuredPost: any = {};
  featuredIndex: number = 0;

  ngOnInit() {
    this.featuredIndex = Math.floor(Math.random() * 30);

    // esegue al caricamento del componente
    fetch('db.json')
      .then((res) => <Promise<iJSONresponse>>res.json())
      .then((data) => {
        this.featuredPost = data.posts[this.featuredIndex];
      })
      .catch((err) => console.log(err));
  }
}
