import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SwimlaneTableRoutingModule } from './swimlane-table-routing.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, SwimlaneTableRoutingModule],
})
export class SwimlaneTableModule {}
