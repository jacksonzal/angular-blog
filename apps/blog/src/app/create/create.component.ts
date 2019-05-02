import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Apollo } from 'apollo-angular';
import {
  ACCOUNT_QUERY,
  CREATE_POST_MUTATION,
  CreatePostMutationResponse,
  EDIT_POST_MUTATION,
  EditPostMutationResponse,
  POST_QUERY,
  PostQueryResponse
} from './graphql';
import { Subscription } from 'apollo-client/util/Observable';
import { ApolloQueryResult } from 'apollo-client';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { GC_USER_ID } from '../constants';

@Component({
  selector: 'blog-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public Editor = ClassicEditor;
  public post: FormGroup;
  public loading = false;
  public edit = false;
  private querySubscription: Subscription;

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private apollo: Apollo
  ) {}

  ngOnInit() {
    const id = this.activeRouter.snapshot.paramMap.get('id');

    this.post = new FormGroup({
      keywords: new FormControl('', [Validators.required]),
      content: new FormControl('<p>Hello, world!</p>', [Validators.required]),
      title: new FormControl('', [Validators.required])
    });

    if (id) {
      this.loading = true;
      this.edit = true;
      this.getPost(id);
    }
  }

  getPost(id: string) {
    this.querySubscription = this.apollo
      .watchQuery<PostQueryResponse>({
        query: POST_QUERY,
        variables: { id }
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        const { keywords, content, title } = data.Post;

        this.post.controls.keywords.setValue(keywords.join(', '));
        this.post.controls.content.setValue(content);
        this.post.controls.title.setValue(title);
      });
  }

  submit() {
    const {
      status,
      value: { content, keywords, title }
    } = this.post;

    if (status === 'VALID') {
      this.loading = true;
      const variables = {
        content,
        keywords: keywords.split(',').map(word => word.trim()),
        title,
        postedById: localStorage.getItem(GC_USER_ID)
      };
      const refetchQueries = [
        {
          query: ACCOUNT_QUERY,
          variables: { id: localStorage.getItem(GC_USER_ID) }
        }
      ];
      if (this.edit) {
        this.apollo
          .mutate({
            mutation: EDIT_POST_MUTATION,
            variables: {
              ...variables,
              id: this.activeRouter.snapshot.paramMap.get('id')
            },
            refetchQueries
          })
          .subscribe(
            (result: ApolloQueryResult<EditPostMutationResponse>) => {
              console.log(result);
              this.loading = false;
              this.router.navigate([`/post/${result.data.updatePost.id}`]);
            },
            error => {
              this.loading = false;
              console.log(error);
            }
          );
      } else {
        this.apollo
          .mutate({
            mutation: CREATE_POST_MUTATION,
            variables,
            refetchQueries
          })
          .subscribe(
            (result: ApolloQueryResult<CreatePostMutationResponse>) => {
              this.loading = false;
              this.router.navigate([`/post/${result.data.createPost.id}`]);
            },
            error => {
              this.loading = false;
              console.log(error);
            }
          );
      }
    }
  }
}
