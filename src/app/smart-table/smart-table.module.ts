import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SmartTableModule as SmartTableNgModule } from 'smart-table-ng';

import { SmartTableRoutingModule } from './smart-table-routing.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, SmartTableNgModule, SmartTableRoutingModule],
})
export class SmartTableModule {}
