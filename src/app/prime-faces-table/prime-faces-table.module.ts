import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { PrimeFacesTableRoutingModule } from './prime-faces-table-routing.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, PrimeFacesTableRoutingModule, TableModule, ButtonModule],
})
export class PrimeFacesTableModule {}
