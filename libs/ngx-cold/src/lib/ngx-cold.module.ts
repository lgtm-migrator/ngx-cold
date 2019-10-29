import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxColdClickDirective } from './ngx-cold-click.directive';
import { NgxColdFormDirective } from './ngx-cold-form.directive';

export const NGX_COLD_DIRECTIVES = [NgxColdClickDirective, NgxColdFormDirective];
@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: NGX_COLD_DIRECTIVES,
  exports: NGX_COLD_DIRECTIVES
})
export class NgxColdModule {}
