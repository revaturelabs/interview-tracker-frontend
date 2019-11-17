import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  MatCardModule,
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatBadgeModule,
   MatSidenavModule,
   MatSidenav,
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
   MatButtonToggleModule
} from '@angular/material';

const MaterialComponents = [
  MatCardModule,
   CommonModule,
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatSidenavModule,
   MatSidenav,
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
   MatPaginatorModule
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
