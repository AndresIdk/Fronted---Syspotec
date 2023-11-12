import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveSpacesPipe } from './pipes/remove-spaces.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RemoveSpacesPipe
  ],
  exports: [
    RemoveSpacesPipe
  ]
})
export class SharedModuleModule { }
