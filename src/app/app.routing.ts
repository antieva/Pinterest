import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountCreationComponent } from './account-creation/account-creation.component';

const appRoutes: Routes = [
  {
    path: 'user/:id',
    component: AccountCreationComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
