import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ag-grid', loadChildren: './ag-grid-table/ag-grid-table.module#AgGridTableModule' },
  {
    path: 'material-table',
    loadChildren: './material-table/material-table.module#MaterialTableModule',
  },
  {
    path: 'swimlane-table',
    loadChildren: './swimlane-table/swimlane-table.module#SwimlaneTableModule',
  },
  {
    path: 'prime-faces-table',
    loadChildren: './prime-faces-table/prime-faces-table.module#PrimeFacesTableModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
