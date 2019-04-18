import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CREATE_POST_MUTATION, CreatePostMutationResponse } from './graphql';
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
  public post = {
    keywords: '',
    title: '',
    postedById: localStorage.getItem(GC_USER_ID),
    content: '<p>Hello, world!</p>'
  };

  public loading = false;

  constructor(private apollo: Apollo) {}

  ngOnInit() {}

  submit() {
    const { content, keywords, title, postedById } = this.post;
    this.loading = true;

    this.apollo
      .mutate({
        mutation: CREATE_POST_MUTATION,
        variables: {
          content,
          keywords: keywords.split(',').map(word => word.trim()),
          title,
          postedById
        }
      })
      .subscribe(
        (result: ApolloQueryResult<CreatePostMutationResponse>) => {
          this.loading = false;
          console.log(result);
        },
        error => {
          this.loading = false;
          console.log(error);
        }
      );
  }
}
