import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'notes',
        loadChildren: () => import('./pages/note/note.module').then(m => m.NoteModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
      }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
