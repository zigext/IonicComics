import { Component } from '@angular/core';

import { GarfieldPage } from '../garfield/garfield';
import { TeamPage } from '../team/team';
import { BatmanPage } from '../batman/batman';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BatmanPage;
  tab2Root = GarfieldPage;
  tab3Root = TeamPage;

  constructor() {

  }
}
