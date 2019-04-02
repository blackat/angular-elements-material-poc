import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMaterialComponent } from './input-material.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [BrowserAnimationsModule, ReactiveFormsModule, MatInputModule],
  declarations: [InputMaterialComponent],
  // entryComponents: [InputMaterialComponent],
  exports: [
    InputMaterialComponent,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: []
})
export class MaterialInputModule { }
