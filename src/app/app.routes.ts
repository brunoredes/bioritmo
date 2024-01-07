import { Route } from '@angular/router';
import { HOME_ROUTES } from './domains/home/home.routes';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', loadChildren: () => HOME_ROUTES },
];
