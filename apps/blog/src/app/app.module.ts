import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GraphQLModule } from './apollo.config';
import { LinkItemComponent } from './link-item/link-item.component';
import { LinkListComponent } from './link-list/link-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, LinkItemComponent, LinkListComponent],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
