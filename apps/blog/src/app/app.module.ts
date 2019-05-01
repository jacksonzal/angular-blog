import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';

import { GraphQLModule } from './apollo.config';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';

import { LoginComponent } from './login/login.component';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PreviewComponent } from './preview/preview.component';
import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    HomeComponent,
    HeaderComponent,
    PreviewComponent,
    CreateComponent,
    PostComponent,
    AccountComponent
  ],
  imports: [
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    GraphQLModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
