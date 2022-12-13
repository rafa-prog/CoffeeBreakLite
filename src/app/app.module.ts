import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'


import { HomeComponent } from './pages/home/home.component';
import { CadastroProdutoComponent } from './pages/cadastro-produto/cadastro-produto.component';
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
import { CadastroFuncionarioComponent } from './pages/cadastro-funcionario/cadastro-funcionario.component';
import { ComandaComponent } from './pages/comanda/comanda.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MaisDetalhesComponent } from './pages/mais-detalhes/mais-detalhes.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { EditarProdutoComponent } from './pages/editar-produto/editar-produto.component';
import { EditarFuncionarioComponent } from './pages/editar-funcionario/editar-funcionario.component';

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
    CadastroComponent,
    CadastroProdutoComponent,
    CadastroFuncionarioComponent,
    EditarProdutoComponent,
    EditarFuncionarioComponent,
    MaisDetalhesComponent,
    ComandaComponent,
    PagamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
