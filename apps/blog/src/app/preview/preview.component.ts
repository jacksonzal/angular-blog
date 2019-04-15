import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../types';

@Component({
  selector: 'blog-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input()
  post: Post;

  @Input()
  index: number;

  constructor() {}

  ngOnInit() {}

  showKeywords(): string {
    let result = '';
    this.post.keywords.forEach((word, index) => {
      result += word;
      if (index < this.post.keywords.length - 1) {
        result += ', ';
      }
    });
    return result;
  }
}
