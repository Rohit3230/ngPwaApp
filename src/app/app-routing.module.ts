import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebOtpComponent } from './component/web-otp/web-otp.component';

const routes: Routes = [
  
  {
    path:'*',
    loadChildren: () => import('../app/module/general/research/research.module')
    .then(mod => mod.ResearchModule)
  },
  {
    path: 'research',
    loadChildren: () => import('../app/module/general/research/research.module')
      .then(mod => mod.ResearchModule)
  },
  { path: '', component:WebOtpComponent
  },
    // { path: '', component: SigninComponent },
    // {
    //   path: 'signin',
    //   loadChildren: () => import('../app/module/general/signin/signin.module')
    //     .then(mod => mod.SigninModule)
    // },
    // {
    //   path: 'research',
    //   loadChildren: () => import('../app/module/general/research/research.module')
    //     .then(mod => mod.ResearchModule)
    // },
    // {
    //   path: 'img-crop',
    //   loadChildren: () => import('../app/module/general/img-crop/img-crop.module')
    //     .then(mod => mod.ImgCropModule)
    // },
    // {
    //   path: 'test', component : TestComponent
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
