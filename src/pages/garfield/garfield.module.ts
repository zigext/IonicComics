import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GarfieldPage } from './garfield';

@NgModule({
  declarations: [
    GarfieldPage,
  ],
  imports: [
    IonicPageModule.forChild(GarfieldPage),
  ],
})
export class GarfieldPageModule {}
