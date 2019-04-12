import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GraphQLModule } from './apollo.config';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';

import { LinkItemComponent } from './link-item/link-item.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkItemComponent,
    LinkListComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
