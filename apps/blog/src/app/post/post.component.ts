import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getBlog();
  }

  getBlog() {
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}
