import { Component, OnInit, Input } from '@angular/core';

import { format } from 'date-fns';

import { Comment } from '../../types';

@Component({
  selector: 'blog-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  format = format;

  constructor() {}

  ngOnInit() {}
}
