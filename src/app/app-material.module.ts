import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatBadgeModule,
   MatSidenavModule,
   MatListModule,
   MatGridListModule,
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule,
   MatRadioModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatChipsModule,
   MatTooltipModule,
   MatTableModule,
   MatPaginatorModule,
   MatButtonToggleModule,
   MatCheckboxModule,
   MatSlideToggleModule,
   MatAutocompleteModule
} from '@angular/material';

const MaterialComponents = [
  MatCardModule,
   CommonModule,
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatSidenavModule,
   MatBadgeModule,
   MatListModule,
   MatGridListModule,
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule,
   MatRadioModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatChipsModule,
   MatTooltipModule,
   MatTableModule,
   MatButtonToggleModule,
   MatPaginatorModule,
   MatCheckboxModule,
   MatSlideToggleModule,
   MatAutocompleteModule
];
@NgModule({
   imports: [
      MaterialComponents
   ],
   exports: [
      MaterialComponents
   ],
   providers: [
      MatDatepickerModule,
   ]
})

export class AppMaterialModule { }
