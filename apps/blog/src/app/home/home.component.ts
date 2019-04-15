import { Component, OnInit } from '@angular/core';
import { Post } from '../types';

@Component({
  selector: 'l-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [
    { id: '1', keywords: ['this', 'that'], title: 'This is a BLog Post!' },
    {
      id: '2',
      keywords: ['web', 'development'],
      title: 'Blog On Web Development!'
    },
    {
      id: '3',
      keywords: ['elixir', 'react'],
      title: 'Class Solver Case Study!'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
