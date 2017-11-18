import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BatmanPage } from './batman';

@NgModule({
  declarations: [
    BatmanPage,
  ],
  imports: [
    IonicPageModule.forChild(BatmanPage),
  ],
})
export class BatmanPageModule {}
