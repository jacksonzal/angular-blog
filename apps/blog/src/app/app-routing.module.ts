import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LinkListComponent } from './link-list/link-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'list', component: LinkListComponent, pathMatch: 'full' },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
