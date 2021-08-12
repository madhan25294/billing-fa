import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';


const routes: Routes = [
    // this is a fallback route
    { path: '**', redirectTo: 'user/login', pathMatch: 'full' }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      // preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
