import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LinkListComponent } from './link-list/link-list.component';

const routes: Routes = [{ path: '', component: LinkListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
