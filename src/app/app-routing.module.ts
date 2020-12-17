import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './module/general/signin/signin.component';
import { TestComponent } from './component/test/test.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  {
    path: 'signin',
    loadChildren: () => import('../app/module/general/signin/signin.module')
      .then(mod => mod.SigninModule)
  },{
    path: 'test', component : TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
