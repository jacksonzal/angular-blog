import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Link } from '../types';

import { ALL_LINKS_QUERY, AllLinkQueryResponse } from '../graphql';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'blog-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  allLinks: Link[] = [];
  loading = true;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: ALL_LINKS_QUERY
      })
      .valueChanges.subscribe(
        (response: ApolloQueryResult<AllLinkQueryResponse>) => {
          this.allLinks = response.data.allLinks;
        }
      );
  }
}
