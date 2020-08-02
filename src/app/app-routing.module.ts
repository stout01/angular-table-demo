import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ag-grid',
    loadChildren: () =>
      import('./ag-grid-table/ag-grid-table.module').then(m => m.AgGridTableModule),
  },
  {
    path: 'material-table',
    loadChildren: () =>
      import('./material-table/material-table.module').then(m => m.MaterialTableModule),
  },
  {
    path: 'swimlane-table',
    loadChildren: () =>
      import('./swimlane-table/swimlane-table.module').then(m => m.SwimlaneTableModule),
  },
  {
    path: 'prime-faces-table',
    loadChildren: () =>
      import('./prime-faces-table/prime-faces-table.module').then(m => m.PrimeFacesTableModule),
  },
  {
    path: 'smart-table',
    loadChildren: () => import('./smart-table/smart-table.module').then(m => m.SmartTableModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
