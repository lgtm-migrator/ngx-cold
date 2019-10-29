import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { NgxColdModule } from 'ngx-cold';
import { SharedModule } from '../../../shared/shared.module';
import { ClickBasicComponent } from './click-basic.component';

@NgModule({
  imports: [SharedModule, NgxColdModule, FlexLayoutModule, MatInputModule, MatButtonModule],
  declarations: [ClickBasicComponent],
  exports: [ClickBasicComponent]
})
export class ClickBasicModule {}
