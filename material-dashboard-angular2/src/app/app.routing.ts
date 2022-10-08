import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { createComponentType } from '@angular/compiler/src/render3/view/compiler';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';

const routes: Routes =[
  {path: 'user-profile/:id',component:UserProfileComponent},
  //{path: 'user-profile',component:UserProfileComponent},
  //{path: 'user-profile',component:TableListComponent},
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
