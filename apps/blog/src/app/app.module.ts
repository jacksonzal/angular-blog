import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { GraphQLModule } from './apollo.config';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';

import { LinkItemComponent } from './link-item/link-item.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LoginComponent } from './login/login.component';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkItemComponent,
    LinkListComponent,
    LoginComponent,
    LoadingComponent,
    HomeComponent,
    HeaderComponent,
    PreviewComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    GraphQLModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
