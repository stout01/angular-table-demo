import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
} from '@angular/material';

import { MaterialTableRoutingModule } from './material-table-routing.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MaterialTableRoutingModule,
  ],
})
export class MaterialTableModule {}
