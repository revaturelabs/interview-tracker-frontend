import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatChipsModule,
  MatSnackBarModule,
} from '@angular/material';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatChipsModule,
  MatSnackBarModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
