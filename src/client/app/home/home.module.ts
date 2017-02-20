import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Md2Module }  from 'md2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table.component'
@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule, MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(), NgxDatatableModule, Md2Module.forRoot(), ReactiveFormsModule],
  declarations: [HomeComponent, DataTableComponent],
  exports: [HomeComponent, DataTableComponent],
  providers: [NameListService]
})
export class HomeModule { }
  
