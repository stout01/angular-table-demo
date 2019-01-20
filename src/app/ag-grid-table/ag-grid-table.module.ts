import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AgGridTableRoutingModule } from './ag-grid-table-routing.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, AgGridTableRoutingModule, AgGridModule.withComponents([])],
})
export class AgGridTableModule {}
