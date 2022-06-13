import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/tabs/account',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../card/card.module').then( m => m.CardPageModule )
      },
      {
        path: 'contact',
        loadChildren: () => import('../segment/segment.module').then( m => m.SegmentPageModule )
      },
      {
        path: 'settings',
        loadChildren: () => import('../progress/progress.module').then( m => m.ProgressPageModule )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
