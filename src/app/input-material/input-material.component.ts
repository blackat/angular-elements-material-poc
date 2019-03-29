import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material';

@Component({
  selector: 'app-input-material',
  template: `
    <mat-form-field>
      <input matInput
            [formControl]="formControl"
            (focus)="cd.detectChanges()"
            (blur)="cd.detectChanges()"
            placeholder="Enter value">
    </mat-form-field>
  `,
  styleUrls: ['./input-material.component.css']
})
export class InputMaterialComponent implements OnInit {

  formControl = new FormControl();

  @Input()
  set value(v: string) { this.formControl.setValue(v); }

  @Output()
  inputChanged = new EventEmitter();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.formControl.valueChanges.subscribe(value => {
      this.inputChanged.emit(value);
    });
  }

}

@NgModule({
  imports: [BrowserAnimationsModule, ReactiveFormsModule, MatInputModule],
  declarations: [InputMaterialComponent],
  // entryComponents: [InputMaterialComponent],
  exports: [InputMaterialComponent],
  providers: []
})
export class MaterialInputModule { }
