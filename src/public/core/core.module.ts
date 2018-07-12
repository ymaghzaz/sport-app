import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I_CORE_API_SERVICE } from './interfaces/core-api.service.token';
import {CoreApiService} from './services/core-api.service';
import { HttpModule } from '@angular/http';
@NgModule({
  providers:[{
    provide: I_CORE_API_SERVICE,
    useClass: CoreApiService,
  }],
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: []
})
export class CoreModule { }
