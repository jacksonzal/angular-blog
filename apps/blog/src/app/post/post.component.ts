import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';

import { Apollo } from 'apollo-angular';
import { Subscription } from 'apollo-client/util/Observable';
import { POST_QUERY, PostQueryResponse, COMMENT_MUTATION } from './graphql';
import { Post } from '../types';

import { GC_USER_ID } from '../constants';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;
  loading = true;
  formatDate = format;
  comment: String = '';
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute, private apollo: Apollo) {}

  ngOnInit() {
    this.getBlog();
  }

  getBlog() {
    const variables = { id: this.route.snapshot.paramMap.get('id') };
    this.querySubscription = this.apollo
      .watchQuery<PostQueryResponse>({
        query: POST_QUERY,
        variables
      })
      .valueChanges.subscribe(({ data, loading }) => {
        console.log(data);
        this.loading = loading;
        this.post = data.Post;
      });
  }

  postComment() {
    const variables = {
      content: this.comment,
      commentedOnId: this.post.id,
      postedById: localStorage.getItem(GC_USER_ID)
    };

    const refetchQueries = [
      { query: POST_QUERY, variables: { id: this.post.id } }
    ];

    this.loading = true;

    this.apollo
      .mutate({ mutation: COMMENT_MUTATION, variables, refetchQueries })
      .subscribe(
        data => {
          this.loading = false;
          console.log(data);
        },
        error => {
          this.loading = false;
          console.log(error);
        }
      );
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
