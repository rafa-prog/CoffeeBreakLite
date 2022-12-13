import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'


import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { LoginComponent } from './pages/login/login.component';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { CurrencyMaskModule, CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask";
import { BrMaskerModule } from 'br-mask';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyDeWl-nzU28pzNd1OS2La9PmPcJnwkeew4",
      authDomain: "coffeebreak-679ed.firebaseapp.com",
      projectId: "coffeebreak-679ed",
      storageBucket: "coffeebreak-679ed.appspot.com",
      messagingSenderId: "1079343656038",
      appId: "1:1079343656038:web:80d29554cd99d131ed91a7"
    })),
    provideFirestore(() => getFirestore()),
    AngularFireStorageModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule,
    BrMaskerModule,
    CurrencyMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
