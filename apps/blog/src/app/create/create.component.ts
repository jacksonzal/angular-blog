import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Apollo } from 'apollo-angular';
import {
  ACCOUNT_QUERY,
  CREATE_POST_MUTATION,
  CreatePostMutationResponse
} from './graphql';
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

  constructor(private router: Router, private apollo: Apollo) {}

  ngOnInit() {
    this.post = new FormGroup({
      keywords: new FormControl('', [Validators.required]),
      content: new FormControl('<p>Hello, world!</p>', [Validators.required]),
      title: new FormControl('', [Validators.required])
    });
  }

  submit() {
    const {
      status,
      value: { content, keywords, title }
    } = this.post;

    if (status === 'VALID') {
      this.loading = true;

      this.apollo
        .mutate({
          mutation: CREATE_POST_MUTATION,
          variables: {
            content,
            keywords: keywords.split(',').map(word => word.trim()),
            title,
            postedById: localStorage.getItem(GC_USER_ID)
          },
          refetchQueries: [
            {
              query: ACCOUNT_QUERY,
              variables: { id: localStorage.getItem(GC_USER_ID) }
            }
          ]
        })
        .subscribe(
          (result: ApolloQueryResult<CreatePostMutationResponse>) => {
            console.log(result);
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
