import { Routes } from '@angular/router';
import {AppComponent} from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'layout/:id',
    loadComponent: () => import('./pages/layout/layout.component').then(m => m.LayoutComponent)
  },
];
