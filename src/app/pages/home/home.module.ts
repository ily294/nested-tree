import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {TreeModule} from '@app-components/tree';
import {ListModule} from '@app-components/list/list.module';
import {ServicesModule} from '@app-services/services.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TreeModule,
    ListModule,
    ServicesModule
  ]
})
export class HomeModule {
}
